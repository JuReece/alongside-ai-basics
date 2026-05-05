export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  example?: string;
}

export const promptCategories = [
  { id: 'all', name: 'All Prompts', icon: '🎯' },
  { id: 'writing', name: 'Writing & Communication', icon: '✍️' },
  { id: 'family', name: 'Family Life', icon: '👨‍👩‍👧‍👦' },
  { id: 'education', name: 'Education & Learning', icon: '📚' },
  { id: 'planning', name: 'Planning & Organization', icon: '📅' },
  { id: 'creative', name: 'Creative Projects', icon: '🎨' },
  { id: 'health', name: 'Health & Wellness', icon: '🏥' },
];

export const prompts: Prompt[] = [
  // Writing & Communication
  {
    id: 'email-professional',
    title: 'Professional Email Writer',
    description: 'Transform rough notes into polished professional emails',
    prompt: 'Please help me write a professional email. Here\'s what I need to say: [YOUR MESSAGE]. The recipient is [RELATIONSHIP/CONTEXT]. Please make it clear, polite, and professional.',
    category: 'writing',
    tags: ['email', 'professional', 'communication'],
    difficulty: 'beginner',
    example: 'I need to email my child\'s teacher about extending a homework deadline because of illness.',
  },
  {
    id: 'email-friendly',
    title: 'Friendly Email Writer',
    description: 'Write warm, friendly emails to friends and family',
    prompt: 'Help me write a friendly email to [PERSON]. I want to: [PURPOSE]. Keep it warm and casual, like I\'m talking to a friend.',
    category: 'writing',
    tags: ['email', 'friendly', 'casual'],
    difficulty: 'beginner',
  },
  {
    id: 'text-simplify',
    title: 'Text Simplifier',
    description: 'Make complex text easier to understand',
    prompt: 'Please rewrite this text in simpler language that\'s easier to understand: [PASTE TEXT]',
    category: 'writing',
    tags: ['simplify', 'reading', 'comprehension'],
    difficulty: 'beginner',
  },
  {
    id: 'letter-complaint',
    title: 'Complaint Letter Writer',
    description: 'Write effective complaint letters that get results',
    prompt: 'Help me write a complaint letter about [ISSUE]. I want to: [DESIRED OUTCOME]. Keep it professional but firm. Include: [RELEVANT DETAILS].',
    category: 'writing',
    tags: ['complaint', 'letter', 'advocacy'],
    difficulty: 'intermediate',
  },
  {
    id: 'thank-you-note',
    title: 'Thank You Note',
    description: 'Craft heartfelt thank you messages',
    prompt: 'Help me write a thank you note for [PERSON] who [WHAT THEY DID]. I want it to sound genuine and warm.',
    category: 'writing',
    tags: ['gratitude', 'thank you', 'appreciation'],
    difficulty: 'beginner',
  },

  // Family Life
  {
    id: 'meal-plan-weekly',
    title: 'Weekly Meal Planner',
    description: 'Create balanced meal plans for the whole family',
    prompt: 'Create a healthy weekly meal plan for a family of [NUMBER]. Dietary requirements: [REQUIREMENTS]. Budget: [BUDGET]. Include: breakfast, lunch, dinner, and snacks. Also provide a shopping list.',
    category: 'family',
    tags: ['meal planning', 'cooking', 'nutrition'],
    difficulty: 'beginner',
    example: 'Family of 4, one vegetarian child, budget £80/week',
  },
  {
    id: 'birthday-party-plan',
    title: 'Birthday Party Planner',
    description: 'Plan memorable birthday parties with ease',
    prompt: 'Help me plan a birthday party for my [AGE]-year-old who loves [INTERESTS]. Budget: [BUDGET]. Number of guests: [NUMBER]. I need: theme ideas, activities, food suggestions, and a timeline.',
    category: 'family',
    tags: ['party', 'birthday', 'celebration'],
    difficulty: 'beginner',
  },
  {
    id: 'chore-chart',
    title: 'Age-Appropriate Chore Chart',
    description: 'Create fair chore systems for kids',
    prompt: 'Create an age-appropriate chore chart for children aged [AGES]. Include daily and weekly tasks, with suggestions for rewards/motivation that aren\'t just money.',
    category: 'family',
    tags: ['chores', 'parenting', 'responsibility'],
    difficulty: 'beginner',
  },
  {
    id: 'family-activity',
    title: 'Weekend Activity Ideas',
    description: 'Find fun activities for the whole family',
    prompt: 'Suggest [NUMBER] fun family activities for this weekend. Family: [AGES/INTERESTS]. Budget: [BUDGET]. Weather: [CONDITIONS]. Location: [AREA].',
    category: 'family',
    tags: ['activities', 'weekend', 'fun'],
    difficulty: 'beginner',
  },
  {
    id: 'bedtime-story',
    title: 'Personalized Bedtime Story',
    description: 'Create custom stories featuring your child',
    prompt: 'Write a bedtime story for a [AGE]-year-old about [TOPIC/THEME]. Make the main character similar to them: [CHILD\'S INTERESTS/TRAITS]. Keep it age-appropriate and about [LENGTH] long.',
    category: 'family',
    tags: ['stories', 'bedtime', 'creative'],
    difficulty: 'beginner',
  },
  {
    id: 'behavior-strategy',
    title: 'Positive Behavior Strategy',
    description: 'Get advice on managing challenging behaviors',
    prompt: 'My [AGE]-year-old is struggling with [BEHAVIOR]. Provide positive, evidence-based strategies to help. Consider their age and developmental stage. No punishment-focused advice please.',
    category: 'family',
    tags: ['parenting', 'behavior', 'discipline'],
    difficulty: 'intermediate',
  },

  // Education & Learning
  {
    id: 'homework-explainer',
    title: 'Homework Concept Explainer',
    description: 'Help understand homework concepts without giving answers',
    prompt: 'My child has homework about [TOPIC]. Can you explain [SPECIFIC CONCEPT] in a way that helps them understand, without giving away the answer? They\'re in [GRADE/YEAR].',
    category: 'education',
    tags: ['homework', 'learning', 'tutoring'],
    difficulty: 'beginner',
    example: 'Explain fractions using pizza slices for a Year 4 student',
  },
  {
    id: 'study-plan',
    title: 'Exam Study Planner',
    description: 'Create effective study schedules',
    prompt: 'Create a study plan for [SUBJECT] exam in [TIMEFRAME]. Topics to cover: [LIST]. Study time available: [HOURS PER DAY/WEEK]. Include breaks and revision strategies.',
    category: 'education',
    tags: ['studying', 'exams', 'revision'],
    difficulty: 'intermediate',
  },
  {
    id: 'learning-style',
    title: 'Learning Style Activities',
    description: 'Get activities matched to learning style',
    prompt: 'My child learns best through [VISUAL/AUDITORY/KINESTHETIC]. Suggest 5 activities to help them learn about [TOPIC] using their preferred learning style.',
    category: 'education',
    tags: ['learning styles', 'activities', 'education'],
    difficulty: 'intermediate',
  },
  {
    id: 'reading-comprehension',
    title: 'Reading Comprehension Helper',
    description: 'Improve understanding of reading material',
    prompt: 'My [AGE]-year-old is reading [BOOK/TEXT]. Help me create discussion questions to check their comprehension and deepen their understanding. Make it engaging, not like a test.',
    category: 'education',
    tags: ['reading', 'comprehension', 'literacy'],
    difficulty: 'intermediate',
  },
  {
    id: 'project-ideas',
    title: 'School Project Ideas',
    description: 'Brainstorm creative project approaches',
    prompt: 'My child has a school project on [TOPIC]. Requirements: [DETAILS]. Suggest 3 creative approaches they could take, with materials needed and estimated time.',
    category: 'education',
    tags: ['projects', 'creativity', 'school'],
    difficulty: 'beginner',
  },

  // Planning & Organization
  {
    id: 'travel-itinerary',
    title: 'Family Holiday Planner',
    description: 'Plan stress-free family holidays',
    prompt: 'Plan a [DURATION] family holiday to [DESTINATION]. Travelers: [AGES]. Budget: [AMOUNT]. Interests: [HOBBIES]. Include: accommodation suggestions, daily itinerary, kid-friendly activities, and packing list.',
    category: 'planning',
    tags: ['travel', 'holiday', 'vacation'],
    difficulty: 'intermediate',
  },
  {
    id: 'budget-tracker',
    title: 'Family Budget Planner',
    description: 'Create realistic family budgets',
    prompt: 'Help me create a monthly family budget. Income: [AMOUNT]. Fixed expenses: [LIST]. I want to save for: [GOALS]. Identify areas where we might save money.',
    category: 'planning',
    tags: ['budget', 'finance', 'money'],
    difficulty: 'intermediate',
  },
  {
    id: 'moving-checklist',
    title: 'House Move Checklist',
    description: 'Organize every step of moving home',
    prompt: 'Create a comprehensive moving checklist for moving [DISTANCE] with [FAMILY SIZE]. Timeline: [WEEKS UNTIL MOVE]. Include: tasks by week, who to notify, and tips for moving with kids.',
    category: 'planning',
    tags: ['moving', 'organization', 'checklist'],
    difficulty: 'intermediate',
  },
  {
    id: 'calendar-organizer',
    title: 'Family Calendar Organizer',
    description: 'Coordinate busy family schedules',
    prompt: 'Help me organize our family calendar for [MONTH]. Family members: [LIST WITH AGES]. Regular commitments: [ACTIVITIES]. Goals: [WHAT TO ACHIEVE]. Suggest a system to keep everyone coordinated.',
    category: 'planning',
    tags: ['calendar', 'schedule', 'organization'],
    difficulty: 'beginner',
  },
  {
    id: 'event-checklist',
    title: 'Event Planning Checklist',
    description: 'Plan successful family events',
    prompt: 'Create a planning checklist for [EVENT TYPE]. Date: [DATE]. Guests: [NUMBER]. Budget: [AMOUNT]. Include timeline with deadlines for each task.',
    category: 'planning',
    tags: ['events', 'planning', 'organization'],
    difficulty: 'intermediate',
  },

  // Creative Projects
  {
    id: 'craft-ideas',
    title: 'Craft Project Generator',
    description: 'Get creative craft ideas for kids',
    prompt: 'Suggest [NUMBER] craft projects for [AGE]-year-olds. Theme: [THEME]. Materials we have: [LIST]. Difficulty: [EASY/MEDIUM]. Include step-by-step instructions and estimated time.',
    category: 'creative',
    tags: ['crafts', 'activities', 'creative'],
    difficulty: 'beginner',
  },
  {
    id: 'scavenger-hunt',
    title: 'Scavenger Hunt Creator',
    description: 'Design fun scavenger hunts',
    prompt: 'Create a scavenger hunt for [AGE]-year-olds. Location: [INDOORS/OUTDOORS/SPECIFIC PLACE]. Theme: [THEME]. Number of items: [NUMBER]. Make clues age-appropriate and fun.',
    category: 'creative',
    tags: ['games', 'scavenger hunt', 'fun'],
    difficulty: 'beginner',
  },
  {
    id: 'photo-book-captions',
    title: 'Photo Book Caption Writer',
    description: 'Write meaningful photo book captions',
    prompt: 'Help me write captions for a photo book about [EVENT/PERIOD]. Photos show: [DESCRIBE PHOTOS]. Write in a [TONE: heartfelt/funny/nostalgic] style.',
    category: 'creative',
    tags: ['photos', 'memories', 'writing'],
    difficulty: 'beginner',
  },
  {
    id: 'garden-plan',
    title: 'Family Garden Planner',
    description: 'Plan gardens kids can help with',
    prompt: 'Help me plan a family garden. Space: [SIZE/TYPE]. Climate: [LOCATION/ZONE]. Kids ages: [AGES]. Suggest easy-to-grow plants kids can care for, with a planting schedule.',
    category: 'creative',
    tags: ['gardening', 'outdoor', 'nature'],
    difficulty: 'intermediate',
  },
  {
    id: 'memory-game',
    title: 'Educational Game Creator',
    description: 'Design custom learning games',
    prompt: 'Create an educational game to help my [AGE]-year-old learn [TOPIC/SKILL]. Make it fun and hands-on. Include: materials needed, how to play, and how to vary difficulty.',
    category: 'creative',
    tags: ['games', 'learning', 'education'],
    difficulty: 'intermediate',
  },

  // Health & Wellness
  {
    id: 'doctor-questions',
    title: 'Doctor Appointment Prep',
    description: 'Prepare questions for medical appointments',
    prompt: 'Help me prepare for a doctor\'s appointment about [CONDITION/CONCERN]. Suggest important questions to ask, symptoms to mention, and information to bring. NOT medical advice - just appointment prep.',
    category: 'health',
    tags: ['health', 'doctor', 'medical'],
    difficulty: 'intermediate',
  },
  {
    id: 'healthy-snacks',
    title: 'Healthy Snack Ideas',
    description: 'Find nutritious snacks kids will actually eat',
    prompt: 'Suggest [NUMBER] healthy snack ideas for [AGE]-year-olds. Dietary requirements: [REQUIREMENTS]. Should be: quick to make, appealing to kids, and genuinely nutritious.',
    category: 'health',
    tags: ['nutrition', 'snacks', 'healthy eating'],
    difficulty: 'beginner',
  },
  {
    id: 'exercise-routine',
    title: 'Family Exercise Planner',
    description: 'Create fun family fitness activities',
    prompt: 'Create a [DURATION] family exercise routine. Family: [AGES]. Fitness levels: [DESCRIBE]. Location: [INDOORS/OUTDOORS]. Make it fun and achievable for everyone.',
    category: 'health',
    tags: ['exercise', 'fitness', 'wellness'],
    difficulty: 'beginner',
  },
  {
    id: 'sleep-routine',
    title: 'Bedtime Routine Builder',
    description: 'Develop healthy sleep routines',
    prompt: 'Help me create a bedtime routine for my [AGE]-year-old. Current challenges: [ISSUES]. Bedtime goal: [TIME]. Include calming activities and a realistic timeline.',
    category: 'health',
    tags: ['sleep', 'routine', 'bedtime'],
    difficulty: 'beginner',
  },
  {
    id: 'stress-management',
    title: 'Kid-Friendly Stress Management',
    description: 'Teach children healthy coping strategies',
    prompt: 'My [AGE]-year-old is dealing with stress/anxiety about [SITUATION]. Suggest age-appropriate coping strategies and activities to help them manage these feelings. Evidence-based approaches only.',
    category: 'health',
    tags: ['mental health', 'stress', 'wellbeing'],
    difficulty: 'intermediate',
  },
];

// Helper functions
export function getPromptById(id: string): Prompt | undefined {
  return prompts.find(p => p.id === id);
}

export function getPromptsByCategory(category: string): Prompt[] {
  if (category === 'all') return prompts;
  return prompts.filter(p => p.category === category);
}

export function getPromptsByTag(tag: string): Prompt[] {
  return prompts.filter(p => p.tags.includes(tag));
}

export function searchPrompts(query: string): Prompt[] {
  const lowercaseQuery = query.toLowerCase();
  return prompts.filter(
    p =>
      p.title.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
