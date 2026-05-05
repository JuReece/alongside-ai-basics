'use client';

import Link from 'next/link';
import { Module } from '@/data/modules';
import { getModuleProgress, getModuleCompletionPercentage } from '@/lib/progress';
import { useEffect, useState } from 'react';

export function ModuleCard({ module }: { module: Module }) {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progress = getModuleProgress(module.id);
    setCompletionPercentage(getModuleCompletionPercentage(module.id));
    setIsComplete(!!progress?.completedAt);
  }, [module.id]);

  const colorClasses = {
    blue: 'from-primary to-primary-light hover:from-primary-dark hover:to-primary',
    green: 'from-sage to-sage-light hover:from-sage hover:to-sage',
    red: 'from-[#E65100] to-[#FF6B35] hover:from-[#B71C1C] hover:to-[#E65100]',
    purple: 'from-plum to-secondary hover:from-plum hover:to-plum',
  };

  return (
    <Link
      href={`/modules/${module.id}`}
      className={`block relative overflow-hidden rounded-xl bg-gradient-to-br ${
        colorClasses[module.color as keyof typeof colorClasses]
      } text-white p-6 transition-all hover:scale-105 hover:shadow-lg`}
    >
      {/* Completion badge */}
      {isComplete && (
        <div className="absolute top-4 right-4 bg-white text-[#2E7D32] rounded-full p-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <span className="text-5xl">{module.icon}</span>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
          <p className="text-white/90 text-sm">{module.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-white/80 mb-4">
        <span>⏱️ {module.estimatedTime} minutes</span>
        <span>{module.lessons.length} lessons</span>
      </div>

      {/* Progress bar */}
      {completionPercentage > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-white/90 mb-1">
            <span>Progress</span>
            <span>{completionPercentage}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      )}

      {completionPercentage === 0 && (
        <div className="mt-4 text-sm text-white/90">
          Start learning →
        </div>
      )}
    </Link>
  );
}
