import Link from 'next/link';

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
                <Link href="/playground" className="hover:text-primary">
                  Playground
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">Alongside AI Basics</h4>
            <p className="text-sm text-gray-600 mb-4">
              Free AI education for families. Learn to use AI safely and effectively.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} The AI Ark. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
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
