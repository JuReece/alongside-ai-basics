export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoId: string; // YouTube video ID - REPLACE WITH ACTUAL IDs
  duration: number; // minutes
  resources?: Array<{
    title: string;
    url: string;
    type: 'pdf' | 'link';
  }>;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  estimatedTime: number; // minutes
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: 'ai-basics',
    title: 'AI Basics for Families',
    description: 'Understand what AI is and how it works - no jargon, just clear explanations',
    icon: '🤖',
    color: 'blue',
    estimatedTime: 30,
    lessons: [
      {
        id: 'what-is-ai',
        title: 'What is AI, Really?',
        description: 'No jargon explanation of artificial intelligence and how it fits into everyday life',
        videoId: 'dQw4w9WgXcQ', // REPLACE: Placeholder YouTube ID
        duration: 5,
        resources: [
          {
            title: 'AI Basics Cheat Sheet',
            url: '/pdfs/ai-basics-cheat-sheet.pdf',
            type: 'pdf',
          },
        ],
      },
      {
        id: 'how-ai-works',
        title: 'How Does ChatGPT/Claude Work?',
        description: 'Simple mental model - think of it as very smart autocomplete',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 7,
      },
      {
        id: 'what-ai-can-do',
        title: 'What AI Can and Can\'t Do',
        description: 'Understanding capabilities and limitations - when to use AI and when not to',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 6,
      },
      {
        id: 'misconceptions',
        title: 'Common Misconceptions Debunked',
        description: 'Separating fact from fiction about artificial intelligence',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 5,
      },
    ],
  },
  {
    id: 'practical-ai',
    title: 'Practical AI for Everyday Life',
    description: 'Apply AI to real family tasks - from emails to meal planning',
    icon: '⚡',
    color: 'green',
    estimatedTime: 45,
    lessons: [
      {
        id: 'writing-emails',
        title: 'Writing Better Emails with AI',
        description: 'Professional and friendly emails in minutes',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 8,
      },
      {
        id: 'family-activities',
        title: 'Planning Family Activities',
        description: 'Weekend plans, holidays, and birthday parties made easy',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 7,
      },
      {
        id: 'homework-help',
        title: 'Homework Help (The Right Way)',
        description: 'Supporting learning without doing the work for them',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 10,
        resources: [
          {
            title: 'Parent Guide: AI for Homework',
            url: '/pdfs/homework-help-guide.pdf',
            type: 'pdf',
          },
        ],
      },
      {
        id: 'meal-planning',
        title: 'Meal Planning and Recipes',
        description: 'Weekly menus, dietary restrictions, and reducing food waste',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 8,
      },
      {
        id: 'travel-planning',
        title: 'Travel Planning',
        description: 'Family holidays from research to packing lists',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 9,
      },
      {
        id: 'budget-management',
        title: 'Budget Management',
        description: 'Understanding finances and planning (without sharing bank details!)',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 7,
      },
    ],
  },
  {
    id: 'safety-ethics',
    title: 'AI Safety & Ethics',
    description: 'Use AI safely and responsibly - protecting privacy and teaching kids',
    icon: '🛡️',
    color: 'red',
    estimatedTime: 40,
    lessons: [
      {
        id: 'protecting-privacy',
        title: 'Protecting Your Privacy',
        description: 'What not to share and how to rewrite prompts safely',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 10,
        resources: [
          {
            title: 'Family Safety Guide',
            url: '/pdfs/family-safety-guide.pdf',
            type: 'pdf',
          },
        ],
      },
      {
        id: 'ai-limitations',
        title: 'Recognizing AI Limitations',
        description: 'When AI gets it wrong and how to spot hallucinations',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 8,
      },
      {
        id: 'fact-checking',
        title: 'Fact-Checking AI Responses',
        description: 'The golden rule: AI is your first draft, not final answer',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 9,
      },
      {
        id: 'teaching-kids',
        title: 'Teaching Kids About AI',
        description: 'Age-appropriate conversations and family AI agreements',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 12,
        resources: [
          {
            title: 'Family AI Agreement Template',
            url: '/pdfs/family-ai-agreement.pdf',
            type: 'pdf',
          },
        ],
      },
      {
        id: 'avoiding-scams',
        title: 'Avoiding Scams and Misinformation',
        description: 'Recognizing AI-generated scams and deepfakes',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 10,
      },
      {
        id: 'when-not-to-use',
        title: 'When NOT to Use AI',
        description: 'Medical, legal, financial decisions - know when to use humans',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 8,
      },
    ],
  },
  {
    id: 'specific-needs',
    title: 'AI for Specific Needs',
    description: 'AI for accessibility, learning differences, seniors, and language learners',
    icon: '♿',
    color: 'purple',
    estimatedTime: 35,
    lessons: [
      {
        id: 'accessibility',
        title: 'AI for Accessibility',
        description: 'Vision, hearing, and mobility support through AI tools',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 12,
      },
      {
        id: 'learning-differences',
        title: 'AI for Learning Differences',
        description: 'Support for dyslexia, ADHD, autism, and dyscalculia',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 15,
      },
      {
        id: 'seniors',
        title: 'AI for Elderly Family Members',
        description: 'Getting started guide designed for seniors',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 10,
      },
      {
        id: 'language-learners',
        title: 'AI for Non-Native English Speakers',
        description: 'Translation, learning, and communication support',
        videoId: 'dQw4w9WgXcQ', // REPLACE
        duration: 10,
      },
    ],
  },
];

// Helper functions
export function getModuleById(id: string): Module | undefined {
  return modules.find(m => m.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
}

export function getTotalLessons(): number {
  return modules.reduce((total, module) => total + module.lessons.length, 0);
}

export function getTotalDuration(): number {
  return modules.reduce((total, module) =>
    total + module.lessons.reduce((sum, lesson) => sum + lesson.duration, 0), 0
  );
}
