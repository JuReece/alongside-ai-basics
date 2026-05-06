'use client';

import Link from 'next/link';

interface AITool {
  id: string;
  name: string;
  provider: string;
  description: string;
  url: string;
  icon: string;
  bestFor: string;
  cost: string;
  signupSteps: string[];
  recommended?: boolean;
}

const aiTools: AITool[] = [
  {
    id: 'claude',
    name: 'Claude',
    provider: 'by Anthropic',
    description: 'Safe, helpful AI assistant designed to be honest and harmless',
    url: 'https://claude.ai',
    icon: '🤖',
    bestFor: 'Families, helpful conversations, writing assistance, homework help',
    cost: 'Free (no credit card needed)',
    recommended: true,
    signupSteps: [
      'Visit claude.ai',
      'Click "Sign Up" or "Get Started"',
      'Use your email or sign in with Google/Apple',
      'Verify your email',
      'Start chatting immediately!',
    ],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'by OpenAI',
    description: 'Popular AI chatbot for questions, creative writing, and more',
    url: 'https://chat.openai.com',
    icon: '💬',
    bestFor: 'Quick questions, creative writing, coding help',
    cost: 'Free tier available',
    signupSteps: [
      'Visit chat.openai.com',
      'Click "Sign up"',
      'Create account with email or use Google/Microsoft sign-in',
      'Verify your email',
      'Start using ChatGPT!',
    ],
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    provider: 'by Perplexity',
    description: 'AI-powered search engine that shows sources for answers',
    url: 'https://www.perplexity.ai',
    icon: '🔍',
    bestFor: 'Research, fact-checking, finding sources',
    cost: 'Free',
    signupSteps: [
      'Visit perplexity.ai',
      'You can start without signing up!',
      'Or create free account for history',
      'Ask questions and get sourced answers',
    ],
  },
];

const starterPrompts = [
  {
    id: 1,
    title: 'Professional Email Writer',
    prompt:
      "Please help me write a professional email. Here's what I need to say: [YOUR MESSAGE]. The recipient is [RELATIONSHIP/CONTEXT]. Please make it clear, polite, and professional.",
    example: "I need to email my child's teacher about extending a homework deadline because of illness.",
  },
  {
    id: 2,
    title: 'Homework Helper',
    prompt:
      "I'm helping my child with homework on [TOPIC]. Please explain [CONCEPT] in a way that helps them understand it, without giving away the answer. Use simple language and an example.",
    example: 'Explain how photosynthesis works for a Year 6 student.',
  },
  {
    id: 3,
    title: 'Recipe Adapter',
    prompt:
      "I have these ingredients: [LIST INGREDIENTS]. Can you suggest a simple recipe I can make? Please consider that [ANY DIETARY REQUIREMENTS OR PREFERENCES].",
    example: 'I have chicken, rice, tomatoes, and garlic. We need a gluten-free meal for 4 people.',
  },
];

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal to-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ready to Practise?</h1>
            <p className="text-xl text-white/90 mb-6">
              You've learned the concepts—now it's time to try them yourself! Here's how to get started with free AI
              tools.
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
        {/* Why Practice */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Practise?</h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-4">
              Learning about AI is great, but <strong>trying it yourself</strong> is when it really clicks. Just like
              learning to ride a bike or cook a meal, you need hands-on practice.
            </p>
            <p className="text-gray-700 mb-4">
              The good news? You don't need anything special. There are several free AI tools you can use right now,
              with no credit card required.
            </p>
            <p className="text-gray-700">
              Below, we'll show you exactly which tools to use and how to get started. Pick one that sounds right for
              you, sign up (it's free!), and start experimenting.
            </p>
          </div>
        </section>

        {/* Free AI Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Free AI Tools to Try</h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                className={`bg-white rounded-xl p-6 md:p-8 shadow-sm border ${
                  tool.recommended ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-gray-100'
                }`}
              >
                {tool.recommended && (
                  <div className="inline-block mb-4 px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    ⭐ Our Top Pick for Families
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{tool.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {tool.name}{' '}
                      <span className="text-lg font-normal text-gray-600">{tool.provider}</span>
                    </h3>
                    <p className="text-gray-700 mb-2">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-sage-light/30 text-sage border border-sage-light rounded-full font-medium">
                        {tool.cost}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Best for:</strong> {tool.bestFor}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">How to Get Started:</h4>
                  <ol className="space-y-2">
                    {tool.signupSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Visit {tool.name} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Starter Prompts */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Your First Practice Session</h2>
            <p className="text-gray-700 mb-6">
              Not sure what to ask? Try one of these prompts from our Prompt Library. Just copy it, visit one of the
              free AI tools above, and paste it in!
            </p>

            <div className="space-y-4">
              {starterPrompts.map((prompt) => (
                <div key={prompt.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-2">{prompt.title}</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3 font-mono text-sm">
                    {prompt.prompt}
                  </div>
                  {prompt.example && (
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Example:</strong> {prompt.example}
                    </p>
                  )}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(prompt.prompt);
                      const btn = document.activeElement as HTMLButtonElement;
                      const originalText = btn.textContent;
                      btn.textContent = '✓ Copied!';
                      setTimeout(() => {
                        btn.textContent = originalText;
                      }, 2000);
                    }}
                    className="bg-sage text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sage/90 transition"
                  >
                    📋 Copy Prompt
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/prompts"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                See All 40 Prompts →
              </Link>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Practice Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>💡</span>
                  <span>Start Simple</span>
                </h3>
                <p className="text-gray-700 text-sm">
                  Begin with straightforward questions or prompts. As you get comfortable, you can try more complex
                  tasks.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🎯</span>
                  <span>Be Specific</span>
                </h3>
                <p className="text-gray-700 text-sm">
                  The more details you give, the better the response. Instead of "help with homework," try "explain
                  fractions for a Year 4 student."
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🔄</span>
                  <span>Experiment</span>
                </h3>
                <p className="text-gray-700 text-sm">
                  Don't worry about getting it perfect! Try different ways of asking the same question and see what
                  works best.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>✅</span>
                  <span>Verify Important Info</span>
                </h3>
                <p className="text-gray-700 text-sm">
                  AI can make mistakes. Always double-check important facts, medical advice, or financial information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Reminder */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>🛡️</span>
              <span>Safety Reminder</span>
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Don't share personal information</strong> like addresses, phone numbers, or financial details
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Children should have adult supervision</strong> when using AI tools
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>
                  <strong>Remember:</strong> AI is a tool, not a replacement for human judgement or professional advice
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/resources"
                className="text-primary hover:underline font-medium"
              >
                Read our Family AI Safety Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-6 text-white/90">
            Pick a tool above, sign up (it's free!), and start your AI journey today.
          </p>
          <p className="text-lg mb-6 text-white/90">
            Remember: The best way to learn is by doing. Don't be afraid to experiment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background transition"
            >
              Try Claude (Recommended) →
            </a>
            <Link
              href="/prompts"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Browse All Prompts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
