import Link from 'next/link';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'article' | 'tool' | 'external';
  url: string;
  category: string;
  icon: string;
  downloadable?: boolean;
}

const resourceCategories = [
  { id: 'guides', name: 'Guides & Cheat Sheets', icon: '📄' },
  { id: 'tools', name: 'Recommended AI Tools', icon: '🔧' },
  { id: 'reading', name: 'Further Reading', icon: '📚' },
  { id: 'videos', name: 'External Videos', icon: '🎥' },
  { id: 'community', name: 'Community & Support', icon: '👥' },
];

const resources: Resource[] = [
  // Guides & Cheat Sheets
  {
    id: 'ai-basics-cheat',
    title: 'AI Basics Cheat Sheet',
    description: 'Quick reference guide for AI fundamentals and terminology',
    type: 'pdf',
    url: '/pdfs/ai-basics-cheat-sheet.pdf',
    category: 'guides',
    icon: '📄',
    downloadable: true,
  },
  {
    id: 'safety-guide',
    title: 'Family AI Safety Guide',
    description: 'Complete guide to using AI safely with your family',
    type: 'pdf',
    url: '/pdfs/family-safety-guide.pdf',
    category: 'guides',
    icon: '🛡️',
    downloadable: true,
  },
  {
    id: 'homework-guide',
    title: 'AI for Homework: Parent Guide',
    description: 'How to help children use AI for learning without cheating',
    type: 'pdf',
    url: '/pdfs/homework-help-guide.pdf',
    category: 'guides',
    icon: '📝',
    downloadable: true,
  },
  {
    id: 'family-agreement',
    title: 'Family AI Agreement Template',
    description: 'Customizable family agreement for responsible AI use',
    type: 'pdf',
    url: '/pdfs/family-ai-agreement.pdf',
    category: 'guides',
    icon: '📋',
    downloadable: true,
  },
  {
    id: 'prompt-tips',
    title: 'Prompt Engineering for Beginners',
    description: 'Learn to write better prompts and get better AI responses',
    type: 'pdf',
    url: '/pdfs/prompt-engineering-guide.pdf',
    category: 'guides',
    icon: '💡',
    downloadable: true,
  },

  // Recommended AI Tools
  {
    id: 'claude',
    title: 'Claude (Anthropic)',
    description: 'Safe, helpful AI assistant - our recommended choice for families',
    type: 'tool',
    url: 'https://claude.ai',
    category: 'tools',
    icon: '🤖',
  },
  {
    id: 'chatgpt',
    title: 'ChatGPT (OpenAI)',
    description: 'Popular AI chatbot with free and paid tiers',
    type: 'tool',
    url: 'https://chat.openai.com',
    category: 'tools',
    icon: '💬',
  },
  {
    id: 'perplexity',
    title: 'Perplexity AI',
    description: 'AI-powered search engine with source citations',
    type: 'tool',
    url: 'https://www.perplexity.ai',
    category: 'tools',
    icon: '🔍',
  },
  {
    id: 'readable',
    title: 'Readable.so',
    description: 'Simplify complex text for easier understanding',
    type: 'tool',
    url: 'https://readable.so',
    category: 'tools',
    icon: '📖',
  },
  {
    id: 'speechify',
    title: 'Speechify',
    description: 'Text-to-speech tool for accessibility and learning',
    type: 'tool',
    url: 'https://speechify.com',
    category: 'tools',
    icon: '🔊',
  },

  // Further Reading
  {
    id: 'anthropic-safety',
    title: 'AI Safety from Anthropic',
    description: 'Research and insights on building safe AI systems',
    type: 'article',
    url: 'https://www.anthropic.com/safety',
    category: 'reading',
    icon: '🔬',
  },
  {
    id: 'common-sense-media',
    title: 'Common Sense Media: AI Guide',
    description: 'Age ratings and guidance for AI tools and apps',
    type: 'article',
    url: 'https://www.commonsensemedia.org/articles/parents-guide-to-ai',
    category: 'reading',
    icon: '👪',
  },
  {
    id: 'bbc-ai-guide',
    title: 'BBC: AI Explained',
    description: 'Accessible articles explaining AI concepts',
    type: 'article',
    url: 'https://www.bbc.co.uk/news/topics/ce1qrvlegnyt',
    category: 'reading',
    icon: '📰',
  },
  {
    id: 'mit-ai-ethics',
    title: 'MIT: Ethics of AI',
    description: 'Academic perspective on AI ethics and responsibility',
    type: 'article',
    url: 'https://www.media.mit.edu/projects/ai-ethics/overview/',
    category: 'reading',
    icon: '🎓',
  },

  // External Videos
  {
    id: 'crash-course-ai',
    title: 'Crash Course: AI',
    description: 'Comprehensive video series on AI fundamentals',
    type: 'video',
    url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b',
    category: 'videos',
    icon: '🎬',
  },
  {
    id: 'ted-ai-talks',
    title: 'TED Talks: AI',
    description: 'Inspiring talks about AI from experts and innovators',
    type: 'video',
    url: 'https://www.ted.com/topics/ai',
    category: 'videos',
    icon: '🎤',
  },

  // Community & Support
  {
    id: 'theaiark',
    title: 'The AI Ark',
    description: 'Visit our main site for more AI resources and updates',
    type: 'external',
    url: 'https://theaiark.org',
    category: 'community',
    icon: '🚀',
  },
  {
    id: 'alongside-health',
    title: 'Alongside Health',
    description: 'AI-powered health support for families',
    type: 'external',
    url: 'https://alongsidehealth.co.uk',
    category: 'community',
    icon: '💚',
  },
  {
    id: 'alongside-send',
    title: 'Alongside Send',
    description: 'Specialized AI support for special educational needs',
    type: 'external',
    url: 'https://alongsidesend.co.uk',
    category: 'community',
    icon: '♿',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal to-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resource Library</h1>
            <p className="text-xl text-white/90 mb-6">
              Downloadable guides, recommended tools, and curated links to help your AI journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background transition"
              >
                Back to Modules
              </Link>
              <Link
                href="/prompts"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Browse Prompts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Resources by Category */}
        {resourceCategories.map((category) => {
          const categoryResources = resources.filter((r) => r.category === category.id);
          if (categoryResources.length === 0) return null;

          return (
            <section key={category.id} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">{category.icon}</span>
                <span>{category.name}</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryResources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target={resource.type === 'pdf' ? '_self' : '_blank'}
                    rel={resource.type !== 'pdf' ? 'noopener noreferrer' : undefined}
                    download={resource.downloadable}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-4xl">{resource.icon}</span>
                      {resource.downloadable && (
                        <span className="text-xs px-2 py-1 rounded bg-sage-light/30 text-sage border border-sage-light font-medium">
                          Download
                        </span>
                      )}
                      {resource.type === 'external' && (
                        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 border border-blue-200 font-medium">
                          External
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      {resource.downloadable ? 'Download' : 'Visit'} →
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        {/* Note about PDFs */}
        <div className="max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-yellow-50 border border-yellow-200 rounded-xl">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span>⚠️</span>
            <span>Note About Downloadable Resources</span>
          </h3>
          <p className="text-gray-700 mb-3">
            PDF downloads are currently placeholders. The actual PDF files will be created and added soon.
            In the meantime, all the learning content is available in the video modules above!
          </p>
          <p className="text-gray-700">
            Want to help? If you have expertise in creating educational materials, we'd love your contribution.
            Contact us through{' '}
            <a
              href="https://theaiark.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              The AI Ark
            </a>
            .
          </p>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-xl mb-6 text-white/90">
            Head to the Playground to try out these resources with real AI
          </p>
          <Link
            href="/playground"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background transition"
          >
            Open Playground →
          </Link>
        </div>
      </div>
    </div>
  );
}
