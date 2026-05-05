import { modules } from '@/data/modules';

export interface ModuleProgress {
  moduleId: string;
  lessonsCompleted: string[];
  completedAt?: string;
  startedAt: string;
}

export interface UserProgress {
  modules: Record<string, ModuleProgress>;
  totalVideosWatched: number;
  lastActivity: string;
}

const STORAGE_KEY = 'aiark_progress';

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return { modules: {}, totalVideosWatched: 0, lastActivity: '' };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { modules: {}, totalVideosWatched: 0, lastActivity: new Date().toISOString() };
  }

  try {
    return JSON.parse(stored);
  } catch {
    return { modules: {}, totalVideosWatched: 0, lastActivity: '' };
  }
}

export function saveProgress(progress: UserProgress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markLessonComplete(moduleId: string, lessonId: string) {
  const progress = getProgress();

  if (!progress.modules[moduleId]) {
    progress.modules[moduleId] = {
      moduleId,
      lessonsCompleted: [],
      startedAt: new Date().toISOString(),
    };
  }

  if (!progress.modules[moduleId].lessonsCompleted.includes(lessonId)) {
    progress.modules[moduleId].lessonsCompleted.push(lessonId);
    progress.totalVideosWatched++;
  }

  progress.lastActivity = new Date().toISOString();

  // Check if module is complete
  const module = modules.find(m => m.id === moduleId);
  if (module && progress.modules[moduleId].lessonsCompleted.length === module.lessons.length) {
    progress.modules[moduleId].completedAt = new Date().toISOString();
  }

  saveProgress(progress);

  // Track analytics
  trackEvent('lesson_complete', { moduleId, lessonId });

  return progress;
}

export function getModuleProgress(moduleId: string): ModuleProgress | null {
  const progress = getProgress();
  return progress.modules[moduleId] || null;
}

export function isLessonComplete(moduleId: string, lessonId: string): boolean {
  const moduleProgress = getModuleProgress(moduleId);
  return moduleProgress?.lessonsCompleted.includes(lessonId) || false;
}

export function isModuleComplete(moduleId: string): boolean {
  const moduleProgress = getModuleProgress(moduleId);
  return !!moduleProgress?.completedAt;
}

export function getModuleCompletionPercentage(moduleId: string): number {
  const module = modules.find(m => m.id === moduleId);
  if (!module) return 0;

  const moduleProgress = getModuleProgress(moduleId);
  if (!moduleProgress) return 0;

  return Math.round((moduleProgress.lessonsCompleted.length / module.lessons.length) * 100);
}

export function getOverallCompletionPercentage(): number {
  const progress = getProgress();
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);

  if (totalLessons === 0) return 0;

  return Math.round((progress.totalVideosWatched / totalLessons) * 100);
}

export function exportProgress(): string {
  const progress = getProgress();
  return JSON.stringify(progress, null, 2);
}

export function importProgress(jsonString: string): boolean {
  try {
    const progress = JSON.parse(jsonString);
    saveProgress(progress);
    return true;
  } catch {
    return false;
  }
}

export function resetProgress() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// Analytics helper
export function trackEvent(eventType: string, data?: any) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventType, data);
  }

  // Optional: Send to your own API
  if (typeof window !== 'undefined') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_type: eventType, event_data: data }),
    }).catch(() => {}); // Fail silently
  }
}
