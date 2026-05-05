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
            <h3 className="text-lg font-semibold mb-2">Your Claude API Key</h3>
            <p className="text-sm text-gray-600 mb-4">
              To use the Playground, you'll need your own free Claude API key. Don't worry - it's straightforward!
              Visit{' '}
              <a
                href="https://console.anthropic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                console.anthropic.com
              </a>
              , create a free account, and copy your API key. Your key is stored locally in your browser only - we never see it.
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

            {/* How it Works - Only show when no API key */}
            {!apiKey && (
              <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl p-6 border border-gray-200 text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>💡</span>
                  <span>How the Playground Works</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Your Free API Key</h4>
                      <p className="text-sm text-gray-600">
                        Visit <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">console.anthropic.com</a> and create a free account.
                        You'll get £5 of free credit to start - that's about 100+ conversations!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Add Your Key Here</h4>
                      <p className="text-sm text-gray-600">
                        Click the button below, paste your API key, and save it. It stays in your browser only -
                        we never see it or send it to our servers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Start Chatting!</h4>
                      <p className="text-sm text-gray-600">
                        Type your question or try a prompt from our library. Claude will respond just like a helpful
                        assistant. Perfect for practising before using AI elsewhere.
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
