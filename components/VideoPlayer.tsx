'use client';

import { useState, useEffect } from 'react';
import { markLessonComplete, isLessonComplete } from '@/lib/progress';
import { Button } from '@/components/ui/Button';

export function VideoPlayer({
  videoId,
  moduleId,
  lessonId,
  title,
}: {
  videoId: string;
  moduleId: string;
  lessonId: string;
  title: string;
}) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(isLessonComplete(moduleId, lessonId));
  }, [moduleId, lessonId]);

  const handleComplete = () => {
    if (!completed) {
      markLessonComplete(moduleId, lessonId);
      setCompleted(true);
      // Trigger a re-render of progress indicators
      window.dispatchEvent(new Event('progressUpdated'));
    }
  };

  return (
    <div className="space-y-4">
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {!completed && (
        <Button onClick={handleComplete} variant="success" size="lg" className="w-full">
          ✓ Mark as Complete
        </Button>
      )}

      {completed && (
        <div className="bg-sage-light/20 border border-sage rounded-lg p-4 text-center">
          <p className="text-sage font-medium">✓ Lesson completed!</p>
          <p className="text-secondary text-sm mt-1">Great work! Continue to the next lesson</p>
        </div>
      )}
    </div>
  );
}
