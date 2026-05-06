'use client';

import { useState, useEffect } from 'react';

interface LessonRatingProps {
  moduleId: string;
  lessonId: string;
}

export function LessonRating({ moduleId, lessonId }: LessonRatingProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    // Check if user has already rated this lesson
    const key = `rating_${moduleId}_${lessonId}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      setRating(parseInt(saved));
      setHasRated(true);
    }
  }, [moduleId, lessonId]);

  const handleRating = (value: number) => {
    const key = `rating_${moduleId}_${lessonId}`;
    localStorage.setItem(key, value.toString());
    setRating(value);
    setHasRated(true);

    // Optional: Send to analytics
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Lesson Rating', {
        props: {
          module: moduleId,
          lesson: lessonId,
          rating: value,
        },
      });
    }
  };

  if (hasRated) {
    return (
      <div className="mt-6 p-6 bg-sage-light/20 border border-sage-light rounded-xl text-center">
        <p className="text-lg font-semibold text-sage mb-2">✓ Thanks for your feedback!</p>
        <p className="text-sm text-gray-600">
          You rated this lesson {rating} star{rating !== 1 ? 's' : ''}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-6 bg-white border border-gray-200 rounded-xl">
      <h3 className="text-lg font-semibold mb-3 text-center">Was this lesson helpful?</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Your feedback helps us improve our content
      </p>

      <div className="flex justify-center gap-3">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {value === 1 && '😞'}
              {value === 2 && '😕'}
              {value === 3 && '😐'}
              {value === 4 && '😊'}
              {value === 5 && '😄'}
            </span>
            <span className="text-xs font-medium text-gray-600">
              {value === 1 && 'Not helpful'}
              {value === 2 && 'Slightly'}
              {value === 3 && 'Okay'}
              {value === 4 && 'Helpful'}
              {value === 5 && 'Very helpful'}
            </span>
            <div className="flex gap-0.5">
              {[...Array(value)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">⭐</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
