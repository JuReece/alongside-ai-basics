'use client';

import Link from 'next/link';
import { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thanks for subscribing!');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-4 py-2 text-sm bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p className={`text-xs ${status === 'success' ? 'text-sage' : 'text-red-600'}`}>
          {message}
        </p>
      )}
      <p className="text-xs text-gray-500">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t mt-16 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* The AI Ark */}
          <div>
            <h4 className="font-semibold mb-4">The AI Ark</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://theaiark.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Main Site
                </a>
              </li>
              <li>
                <a
                  href="https://theaiark.org/agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  AI Agents
                </a>
              </li>
              <li>
                <a
                  href="https://theaiark.org/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Alongside Products */}
          <div>
            <h4 className="font-semibold mb-4">Alongside Products</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://alongsidehealth.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Alongside Health
                </a>
              </li>
              <li>
                <a
                  href="https://alongsidesend.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Alongside Send
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary">
                  All Modules
                </Link>
              </li>
              <li>
                <Link href="/prompts" className="hover:text-primary">
                  Prompt Library
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-primary">
                  Practice Guide
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-4">
              Get notified when we add new content and features.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p className="mb-2">
            © {new Date().getFullYear()} The AI Ark. All rights reserved.
          </p>
          <p>
            🤖 Built with AI using{' '}
            <a
              href="https://cr8.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              cr8.io
            </a>{' '}
            & MAJK
          </p>
        </div>
      </div>
    </footer>
  );
}
