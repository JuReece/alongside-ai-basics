'use client';

import { useState } from 'react';
import { prompts, promptCategories, getPromptsByCategory, searchPrompts } from '@/data/prompts';
import { PromptCard } from '@/components/PromptCard';
import Link from 'next/link';

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const displayedPrompts = searchQuery
    ? searchPrompts(searchQuery)
    : getPromptsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prompt Library</h1>
            <p className="text-xl text-white/90 mb-6">
              {prompts.length}+ ready-to-use AI prompts for everyday family life. Just copy, customize, and use!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/playground"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background transition"
              >
                Try in Playground →
              </Link>
              <Link
                href="/"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Back to Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search prompts... (e.g., 'homework', 'meal planning', 'email')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        {!searchQuery && (
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-3 pb-2 justify-center flex-wrap">
              {promptCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="max-w-5xl mx-auto mb-4 text-center text-gray-600">
          {searchQuery ? (
            <p>
              Found <strong>{displayedPrompts.length}</strong> prompt{displayedPrompts.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          ) : (
            <p>
              Showing <strong>{displayedPrompts.length}</strong> prompt{displayedPrompts.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Prompts Grid */}
        {displayedPrompts.length > 0 ? (
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {displayedPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No prompts found for "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary hover:underline font-medium"
            >
              Clear search and see all prompts
            </button>
          </div>
        )}

        {/* Tips Section */}
        <div className="max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-sage-light/20 border border-sage-light rounded-xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>Tips for Using Prompts</span>
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">1.</span>
              <span>
                <strong>Replace the [BRACKETS]</strong> with your specific details before using the prompt
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">2.</span>
              <span>
                <strong>Add context:</strong> The more specific you are, the better the response
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">3.</span>
              <span>
                <strong>Iterate:</strong> If the first response isn't quite right, ask follow-up questions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">4.</span>
              <span>
                <strong>Privacy first:</strong> Never include personal details like addresses, phone numbers, or financial info
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">5.</span>
              <span>
                <strong>Try our Playground:</strong> Test prompts safely with Claude AI before using them elsewhere
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Link
            href="/playground"
            className="inline-block bg-gradient-to-r from-primary to-teal text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-dark hover:to-primary transition text-lg"
          >
            Try These Prompts in Playground →
          </Link>
        </div>
      </div>
    </div>
  );
}
