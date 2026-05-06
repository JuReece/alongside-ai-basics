'use client';

import { modules, getTotalLessons, getTotalDuration } from '@/data/modules';
import { ModuleCard } from '@/components/ModuleCard';
import { getOverallCompletionPercentage } from '@/lib/progress';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    setOverallProgress(getOverallCompletionPercentage());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn AI <span className="text-primary">Safely</span> &{' '}
            <span className="text-sage">Effectively</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Free comprehensive courses teaching families how to use AI in everyday life.
            Learn here, practice anywhere with free AI tools. No jargon, just practical skills.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600 mb-8">
            <div>
              <span className="font-bold text-2xl text-gray-900">{modules.length}</span>
              <p>Modules</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-900">{getTotalLessons()}</span>
              <p>Lessons</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-900">~{Math.round(getTotalDuration() / 60)}h</span>
              <p>Total Time</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-gray-900">100%</span>
              <p>Free</p>
            </div>
          </div>

          {overallProgress > 0 && (
            <div className="max-w-md mx-auto mb-8 p-4 bg-sage-light/20 border border-sage-light rounded-lg">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium">Your Progress</span>
                <span className="text-primary font-bold">{overallProgress}%</span>
              </div>
              <div className="h-3 bg-sage-light/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Start Learning</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-2">Video Lessons</h3>
              <p className="text-gray-600">
                Clear, concise video tutorials you can watch at your own pace
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Ready-to-Use Prompts</h3>
              <p className="text-gray-600">
                40+ prompts you can try with free AI tools like Claude.ai or ChatGPT
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                Learn to use AI responsibly with privacy and ethics built-in
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="inline-block bg-gradient-to-r from-primary to-teal text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-dark hover:to-primary transition"
            >
              Explore Prompt Library →
            </Link>
            <Link
              href="/practice"
              className="inline-block bg-sage text-white px-8 py-4 rounded-lg font-semibold hover:bg-sage/90 transition"
            >
              How to Practice →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 border-t">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Pick any module above and start learning. No signup required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules/ai-basics"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background transition"
            >
              Start with AI Basics
            </Link>
            <Link
              href="/practice"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Learn How to Practice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
