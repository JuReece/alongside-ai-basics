'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPromptById } from '@/data/prompts';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function PlaygroundContent() {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load prompt from URL parameter
  useEffect(() => {
    const promptId = searchParams.get('prompt');
    if (promptId) {
      const prompt = getPromptById(promptId);
      if (prompt) {
        setInput(prompt.prompt);
      }
    }

    // Load API key from localStorage
    const savedApiKey = localStorage.getItem('claude-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, [searchParams]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('claude-api-key', apiKey.trim());
      setShowApiKeyInput(false);
    }
  };

  const handleClearApiKey = () => {
    localStorage.removeItem('claude-api-key');
    setApiKey('');
    setShowApiKeyInput(true);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          apiKey,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `Sorry, there was an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your API key and try again.`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">AI Playground</h1>
              <p className="text-sm text-gray-600">Practice with Claude AI safely</p>
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <Button onClick={handleNewChat} variant="outline" size="sm">
                  🔄 New Chat
                </Button>
              )}
              <Button
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                variant="outline"
                size="sm"
              >
                🔑 {apiKey ? 'Update' : 'Add'} API Key
              </Button>
              <Link href="/prompts">
                <Button variant="outline" size="sm">
                  📚 Prompts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* API Key Input */}
        {showApiKeyInput && (
          <div className="mb-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Getting Your Free Claude API Key</h3>

            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">
                📖 <strong>What's an API key?</strong>
              </p>
              <p className="text-sm text-blue-800">
                Think of it like a library card - it lets you access Claude AI's services. You get £5 of free credit when you sign up, which is enough for about 100 conversations. It's completely free to get started!
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">Here's how to get yours (takes 2 minutes):</p>
              <ol className="text-sm text-gray-700 space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">1.</span>
                  <span>
                    Visit{' '}
                    <a
                      href="https://console.anthropic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      console.anthropic.com
                    </a>
                    {' '}and click "Sign Up" (it's free!)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">2.</span>
                  <span>Create your account using your email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">3.</span>
                  <span>Once logged in, click "Get API Keys" or look for "API Keys" in the menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">4.</span>
                  <span>Click "Create Key", give it a name (like "Playground"), and copy the long code that starts with "sk-ant-"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary">5.</span>
                  <span>Paste it in the box below and click Save</span>
                </li>
              </ol>
            </div>

            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-xs text-green-800">
                <strong>🔒 Your privacy:</strong> Your API key stays on your device only. We never see it, store it, or send it to our servers. It's completely safe.
              </p>
            </div>

            <p className="text-xs text-gray-600 mb-3 font-medium">
              Paste your API key here (it will look like: sk-ant-api03-xxxxx...):
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button onClick={handleSaveApiKey} variant="default">
                Save
              </Button>
              {apiKey && (
                <Button onClick={handleClearApiKey} variant="outline">
                  Clear
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Welcome Message */}
        {messages.length === 0 && !showApiKeyInput && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-3xl font-bold mb-4">Welcome to the AI Playground</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {apiKey
                ? 'Brilliant! You\'re all set. Have a chat with Claude AI below - try one of our prompts from the library, or write your own question.'
                : 'This is your safe space to practise using AI. To get started, you\'ll need to add your own Claude API key (it\'s free and takes 2 minutes).'}
            </p>

            {/* What is the Playground - Only show when no API key */}
            {!apiKey && (
              <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl p-6 border border-gray-200 text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🎮</span>
                  <span>What is the Playground?</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  The Playground is your safe space to practise chatting with AI before you use it for real tasks.
                  Think of it like a practice area where you can:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong>Try out prompts</strong> from our library without any pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong>Learn by doing</strong> - ask questions and see how AI responds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong>Make mistakes safely</strong> - it's just practice, so experiment freely!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong>Build confidence</strong> before using AI for actual family tasks</span>
                  </li>
                </ul>

                <div className="bg-sage-light/20 border border-sage-light rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">💭 New to AI? That's brilliant!</p>
                  <p className="text-sm text-gray-700">
                    You don't need any technical experience. If you can send a text message, you can use this.
                    We'll guide you through every step, starting with getting your free access below.
                  </p>
                </div>

                <h4 className="font-semibold mb-3 text-gray-900">Here's how it works (3 simple steps):</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Your Free Access (API Key)</h4>
                      <p className="text-sm text-gray-600">
                        An API key is like a password that lets you use Claude AI. You'll get one free from Anthropic (the company that makes Claude).
                        It comes with £5 credit - that's enough for about 100 practice conversations!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Add It Here (Completely Safe)</h4>
                      <p className="text-sm text-gray-600">
                        Click the button below and follow the step-by-step instructions to get your key.
                        Then paste it in the box and click Save. It stays on your device only - we never see it.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Start Chatting!</h4>
                      <p className="text-sm text-gray-600">
                        Type your question in the box at the bottom and press Enter. Claude will respond just like you're texting a very knowledgeable friend.
                        Try asking simple things first like "Explain what AI is in simple terms" or "Help me plan dinner for tonight".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Tips - Only show when API key is set */}
            {apiKey && (
              <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl p-6 border border-gray-200 text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>✨</span>
                  <span>Quick Tips for Better Responses</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-medium text-sm">Be specific</p>
                      <p className="text-xs text-gray-600">"Help me plan a dinner for 4" → "Suggest a 30-minute vegetarian dinner for 4, budget £15"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-medium text-sm">Give context</p>
                      <p className="text-xs text-gray-600">Let Claude know who you are and what you need - it helps!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-medium text-sm">Ask follow-ups</p>
                      <p className="text-xs text-gray-600">Not quite right? Just ask Claude to adjust or explain more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-medium text-sm">Stay safe</p>
                      <p className="text-xs text-gray-600">Never share personal details like addresses or phone numbers</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!apiKey ? (
                <Button onClick={() => setShowApiKeyInput(true)} variant="default" size="lg">
                  Get Started - Add Your API Key
                </Button>
              ) : (
                <>
                  <Link href="/prompts">
                    <Button variant="default" size="lg">
                      Browse Prompt Library
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" size="lg">
                      Back to Modules
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Safety Notice */}
            <div className="mt-12 max-w-2xl mx-auto p-6 bg-sage-light/20 border border-sage-light rounded-xl text-left">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span>🛡️</span>
                <span>Privacy & Safety Reminders</span>
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Never share personal information like addresses, phone numbers, or passwords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Don't use AI for medical, legal, or financial decisions without professional advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Always double-check important information - AI can make mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Your conversations stay in your browser - we don't store them</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        {messages.length > 0 && (
          <div className="mb-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-4 ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-lg">
                      {message.role === 'user' ? '👤' : '🤖'}
                    </span>
                    <span className="font-semibold text-sm">
                      {message.role === 'user' ? 'You' : 'Claude'}
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-xl p-4 bg-white border border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🤖</span>
                    <span className="font-semibold text-sm">Claude</span>
                  </div>
                  <div className="mt-2 flex gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        {apiKey && (
          <div className="sticky bottom-4 bg-white rounded-xl border border-gray-200 shadow-lg p-4">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything! Try: 'Help me plan a family activity for this weekend' or 'Explain how AI works in simple terms'"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={3}
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                variant="default"
                className="self-end"
              >
                {isLoading ? '...' : 'Send →'}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Tip: Be specific and provide context for better responses
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-background to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <p className="text-xl text-gray-600">Loading Playground...</p>
        </div>
      </div>
    }>
      <PlaygroundContent />
    </Suspense>
  );
}
