'use client';

import Link from 'next/link';
import { GlobalSearch } from './GlobalSearch';

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <div>
              <h1 className="text-xl font-bold">Alongside AI Basics</h1>
              <p className="text-xs text-gray-600">From The AI Ark</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-secondary hover:text-primary transition"
            >
              Modules
            </Link>
            <Link
              href="/prompts"
              className="text-secondary hover:text-primary transition"
            >
              Prompt Library
            </Link>
            <Link
              href="/practice"
              className="text-secondary hover:text-primary transition"
            >
              Practice Guide
            </Link>
            <Link
              href="/resources"
              className="text-secondary hover:text-primary transition"
            >
              Resources
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <GlobalSearch />
          <a
            href="https://theaiark.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary hover:text-primary transition hidden sm:block"
          >
            ← Visit The AI Ark
          </a>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden border-t px-4 py-2 flex gap-4 overflow-x-auto">
        <Link href="/" className="text-sm whitespace-nowrap">
          Modules
        </Link>
        <Link href="/prompts" className="text-sm whitespace-nowrap">
          Prompts
        </Link>
        <Link href="/practice" className="text-sm whitespace-nowrap">
          Practice
        </Link>
        <Link href="/resources" className="text-sm whitespace-nowrap">
          Resources
        </Link>
      </nav>
    </header>
  );
}
