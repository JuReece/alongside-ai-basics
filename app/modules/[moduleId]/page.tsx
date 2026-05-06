import { modules, getModuleById } from '@/data/modules';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LessonRating } from '@/components/LessonRating';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return modules.map((module) => ({
    moduleId: module.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const module = getModuleById(moduleId);
  if (!module) return {};

  return {
    title: `${module.title} - Alongside AI Basics`,
    description: module.description,
  };
}

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const module = getModuleById(moduleId);

  if (!module) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: module.title },
          ]}
        />

        {/* Module Header */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl">{module.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{module.title}</h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-4">{module.description}</p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>⏱️ {module.estimatedTime} minutes total</span>
            <span>📚 {module.lessons.length} lessons</span>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-8">
          {module.lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">
                      Lesson {index + 1} of {module.lessons.length}
                    </p>
                    <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
                    <p className="text-gray-600">{lesson.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⏱️ {lesson.duration} minutes</span>
                </div>
              </div>

              <VideoPlayer
                videoId={lesson.videoId}
                moduleId={module.id}
                lessonId={lesson.id}
                title={lesson.title}
              />

              {lesson.resources && lesson.resources.length > 0 && (
                <div className="mt-6 p-4 bg-background rounded-lg border border-sage-light">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span>📎</span>
                    <span>Resources</span>
                  </h3>
                  <ul className="space-y-2">
                    {lesson.resources.map((resource, i) => (
                      <li key={i}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-2"
                        >
                          <span>
                            {resource.type === 'pdf' ? '📄' : '🔗'}
                          </span>
                          <span>
                            {resource.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lesson Rating */}
              <LessonRating moduleId={module.id} lessonId={lesson.id} />
            </div>
          ))}
        </div>

        {/* Module Complete CTA */}
        <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-primary to-secondary text-white rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">🎉 Module Complete!</h3>
          <p className="text-lg text-white/90 mb-6">
            Great work! Ready to put what you've learned into practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practice"
              className="inline-block bg-white text-primary py-3 px-6 rounded-lg font-semibold hover:bg-background transition"
            >
              Practice What You've Learned →
            </Link>
            <Link
              href="/"
              className="inline-block border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Back to All Modules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
