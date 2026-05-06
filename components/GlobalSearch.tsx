'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { modules } from '@/data/modules';
import { prompts } from '@/data/prompts';

interface SearchResult {
  type: 'module' | 'lesson' | 'prompt' | 'page';
  title: string;
  description?: string;
  url: string;
  icon?: string;
}

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close on escape or click outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Search function
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search modules
    modules.forEach((module) => {
      if (
        module.title.toLowerCase().includes(searchQuery) ||
        module.description.toLowerCase().includes(searchQuery)
      ) {
        newResults.push({
          type: 'module',
          title: module.title,
          description: module.description,
          url: `/modules/${module.id}`,
          icon: module.icon,
        });
      }

      // Search lessons within modules
      module.lessons.forEach((lesson) => {
        if (
          lesson.title.toLowerCase().includes(searchQuery) ||
          lesson.description.toLowerCase().includes(searchQuery)
        ) {
          newResults.push({
            type: 'lesson',
            title: lesson.title,
            description: `${module.title} - ${lesson.description}`,
            url: `/modules/${module.id}#${lesson.id}`,
            icon: '📺',
          });
        }
      });
    });

    // Search prompts
    prompts.forEach((prompt) => {
      if (
        prompt.title.toLowerCase().includes(searchQuery) ||
        prompt.description.toLowerCase().includes(searchQuery) ||
        prompt.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
      ) {
        newResults.push({
          type: 'prompt',
          title: prompt.title,
          description: prompt.description,
          url: '/prompts',
          icon: '💬',
        });
      }
    });

    // Search pages
    const pages = [
      { title: 'Practice Guide', description: 'Learn how to practice with free AI tools', url: '/practice', icon: '🎮' },
      { title: 'Resources', description: 'Downloadable guides and external links', url: '/resources', icon: '📚' },
    ];

    pages.forEach((page) => {
      if (
        page.title.toLowerCase().includes(searchQuery) ||
        page.description.toLowerCase().includes(searchQuery)
      ) {
        newResults.push({
          type: 'page',
          ...page,
        });
      }
    });

    setResults(newResults.slice(0, 10)); // Limit to 10 results
  }, [query]);

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-background hover:bg-gray-100 rounded-lg transition border border-gray-200"
      >
        <span>🔍</span>
        <span className="hidden md:inline">Search...</span>
        <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs bg-white border border-gray-300 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />

          {/* Modal */}
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Search Input */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search modules, lessons, prompts..."
                    autoFocus
                    className="flex-1 text-lg outline-none"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ESC
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query && results.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <p>No results found for "{query}"</p>
                    <p className="text-sm mt-2">Try searching for modules, lessons, or prompts</p>
                  </div>
                )}

                {results.length > 0 && (
                  <div className="p-2">
                    {results.map((result, index) => (
                      <Link
                        key={index}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className="block p-4 rounded-lg hover:bg-gray-50 transition"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{result.icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{result.title}</h3>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                {result.type}
                              </span>
                            </div>
                            {result.description && (
                              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                {result.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {!query && (
                  <div className="p-8 text-center text-gray-500">
                    <p className="mb-4">Start typing to search...</p>
                    <div className="text-sm text-left inline-block">
                      <p className="font-semibold mb-2">You can search for:</p>
                      <ul className="space-y-1">
                        <li>• Module names (e.g., "AI Basics")</li>
                        <li>• Lesson topics (e.g., "prompts", "safety")</li>
                        <li>• Prompt types (e.g., "email", "homework")</li>
                        <li>• Resources and guides</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
