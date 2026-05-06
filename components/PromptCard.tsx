'use client';

import { useState } from 'react';
import { Prompt } from '@/data/prompts';
import { Button } from '@/components/ui/Button';

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const difficultyColors = {
    beginner: 'bg-sage-light/30 text-sage border-sage-light',
    intermediate: 'bg-blue-100 text-blue-700 border-blue-200',
    advanced: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{prompt.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{prompt.description}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span
          className={`text-xs px-2 py-1 rounded border font-medium ${
            difficultyColors[prompt.difficulty]
          }`}
        >
          {prompt.difficulty}
        </span>
        {prompt.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Example (if exists) */}
      {prompt.example && (
        <div className="mb-4 p-3 bg-background rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 mb-1 font-medium">Example use case:</p>
          <p className="text-sm text-gray-700 italic">{prompt.example}</p>
        </div>
      )}

      {/* Prompt Text */}
      <div className="mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-primary hover:underline mb-2 flex items-center gap-1"
        >
          {expanded ? '▼' : '▶'} {expanded ? 'Hide' : 'Show'} Prompt
        </button>
        {expanded && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-800 font-mono leading-relaxed whitespace-pre-wrap">
              {prompt.prompt}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          onClick={handleCopy}
          variant={copied ? 'success' : 'default'}
          size="sm"
          className="flex-1"
        >
          {copied ? '✓ Copied!' : '📋 Copy Prompt'}
        </Button>
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" size="sm" className="w-full">
            Try at Claude.ai →
          </Button>
        </a>
      </div>
    </div>
  );
}
