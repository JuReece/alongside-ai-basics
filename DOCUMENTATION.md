# Alongside AI Basics - Project Documentation

**Live Site:** https://alongside-ai-basics.netlify.app
**GitHub:** https://github.com/JuReece/alongside-ai-basics
**Created:** May 2024
**Purpose:** Fill The AI Ark's education gap with practical, family-friendly AI learning resources

---

## 📚 What We've Built

### 1. Learning Modules (4 Core Modules, 20 Lessons)

#### Module 1: AI Basics for Families
**Estimated Time:** 30 minutes
**Lessons:**
- What is AI, Really? (5 min)
- How Does ChatGPT/Claude Work? (7 min)
- What AI Can and Can't Do (6 min)
- Common Misconceptions Debunked (5 min)

#### Module 2: Practical AI for Everyday Life
**Estimated Time:** 45 minutes
**Lessons:**
- Writing Better Emails with AI (8 min)
- Planning Family Activities (7 min)
- Homework Help (The Right Way) (10 min)
- Meal Planning and Recipes (8 min)
- Travel Planning (9 min)
- Budget Management (7 min)

#### Module 3: AI Safety & Ethics
**Estimated Time:** 40 minutes
**Lessons:**
- Protecting Your Privacy (10 min)
- Recognising AI Limitations (8 min)
- Fact-Checking AI Responses (9 min)
- Teaching Kids About AI (12 min)
- Avoiding Scams and Misinformation (10 min)
- When NOT to Use AI (8 min)

#### Module 4: AI for Specific Needs
**Estimated Time:** 35 minutes
**Lessons:**
- AI for Accessibility (12 min)
- AI for Learning Differences (15 min)
- AI for Elderly Family Members (10 min)
- AI for Non-Native English Speakers (10 min)

**Module Features:**
- Progress tracking (localStorage-based, no login required)
- Video player integration
- PDF resource downloads
- Completion tracking per lesson
- Overall progress percentage

---

### 2. Prompt Library

**Total Prompts:** 40+
**Categories:** 6

#### Categories:
1. **Writing & Communication** (5 prompts)
   - Professional emails, friendly emails, text simplification, complaint letters, thank you notes

2. **Family Life** (6 prompts)
   - Meal planning, birthday parties, chore charts, weekend activities, bedtime stories, behaviour strategies

3. **Education & Learning** (5 prompts)
   - Homework help, study planning, learning styles, reading comprehension, project ideas

4. **Planning & Organisation** (5 prompts)
   - Travel, budgeting, moving house, family calendar, event planning

5. **Creative Projects** (5 prompts)
   - Crafts, scavenger hunts, photo books, gardening, educational games

6. **Health & Wellness** (5 prompts)
   - Doctor appointments, healthy snacks, exercise, sleep routines, stress management

**Features:**
- Search functionality
- Category filtering
- Difficulty levels (beginner/intermediate/advanced)
- Example use cases
- Copy-to-clipboard
- Direct "Try in Playground" links
- Privacy-safe prompt examples

---

### 3. AI Playground

**Purpose:** Safe space for families to practise using AI before using it elsewhere

**Features:**
- Real-time chat with Claude AI (Sonnet 3.5)
- User-provided API keys (stored locally only)
- Step-by-step onboarding guide
- Quick tips for better responses
- Example prompts in placeholder text
- Message history (browser session only)
- New chat functionality
- Mobile-responsive design

**Educational Components:**
- "How the Playground Works" - 3-step guide for new users
- "Quick Tips for Better Responses" - 4 practical tips
- Privacy & safety reminders throughout
- Clear explanation of API key requirements
- Reassurance about local storage and privacy

**Technical:**
- Edge API route for Claude integration
- Client-side API key storage (localStorage)
- No server-side conversation storage
- Real-time streaming responses

---

### 4. Resources Page

**Sections:** 5 categories of curated resources

#### Guides & Cheat Sheets (5 PDFs)
1. **AI Basics Cheat Sheet** (275 KB, 8 pages)
   - Quick reference guide
   - Common terms
   - What AI can/can't do
   - Safety rules and red flags
   - Example prompts

2. **Family AI Safety Guide** (426 KB, 28 pages)
   - Complete safety handbook
   - Privacy protection
   - Age-appropriate guidelines (5-8, 9-12, 13-16, 16+)
   - Homework ethics
   - Scam recognition
   - Family agreement template included

3. **AI for Homework: Parent Guide** (452 KB, 30 pages)
   - Learning vs cheating
   - Subject-specific guidance
   - Red flags for detecting cheating
   - Learning conversation method
   - What to do if they cheat
   - Working with teachers

4. **Family AI Agreement Template** (300 KB, 22 pages)
   - Customisable family agreement
   - Privacy rules
   - Age-appropriate sections
   - Signature pages
   - Review schedule template

5. **Prompt Engineering for Beginners** (402 KB, 26 pages)
   - Writing better prompts
   - 5 elements of great prompts
   - Before/after examples
   - Prompt formulas
   - Practice exercises
   - Template library

#### Recommended AI Tools (5 tools)
- Claude (Anthropic) - Our recommendation
- ChatGPT (OpenAI)
- Perplexity AI
- Readable.so
- Speechify

#### Further Reading (4 sources)
- Anthropic AI Safety resources
- Common Sense Media AI Guide
- BBC AI Explained
- MIT Ethics of AI

#### External Videos (2 playlists)
- Crash Course: AI series
- TED Talks: AI collection

#### Community & Support (3 links)
- The AI Ark
- Alongside Health
- Alongside Send

**PDF Features:**
- Professional styling with brand colours (teal #0B8E9E, sage #8FA998)
- A4 format, print-ready
- Proper PDF format (not HTML)
- Downloadable and shareable
- Comprehensive content (100+ pages total)

---

## 🎨 Design & Branding

### Colours
- **Primary (Teal):** #0B8E9E - The AI Ark brand colour
- **Secondary (Sage):** #8FA998 - Alongside Health brand colour
- **Background:** #F8FAF9 - Light, calming neutral
- **Success:** #4CAF50
- **Error:** #DC143C

### Typography
- System font stack for performance and familiarity
- Clear hierarchy
- Readable body text (16px base)

### Design Principles
- **Accessible:** High contrast, clear fonts, good spacing
- **Welcoming:** Warm colours, friendly language, emoji icons
- **Professional:** Clean layouts, consistent styling
- **Mobile-first:** Fully responsive across all devices

### Language Guidelines
- **UK English** throughout
- **Empathetic tone** - supportive, non-judgmental
- **Clear and simple** - no jargon unless explained
- **Action-oriented** - tells users what to do, not just what to avoid
- **Inclusive** - considers diverse family structures and needs

---

## 🛠️ Technical Stack

### Framework & Libraries
- **Next.js 16.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling

### APIs & Services
- **Claude API (Anthropic)** - AI chat functionality
- **Netlify** - Hosting and deployment
- **@netlify/plugin-nextjs** - Serverless functions

### Key Dependencies
- `@anthropic-ai/sdk` - Claude API integration
- `md-to-pdf` - PDF generation from markdown
- `clsx` & `tailwind-merge` - Conditional styling
- `react-hook-form` - Form handling (future use)
- `zod` - Schema validation (future use)

### Development Tools
- `eslint` - Code linting
- `netlify-cli` - Local development and deployment

### File Structure
```
alongside-ai-basics/
├── app/
│   ├── api/
│   │   └── chat/route.ts          # Claude API proxy
│   ├── modules/[moduleId]/page.tsx # Dynamic module pages
│   ├── playground/page.tsx         # AI Playground
│   ├── prompts/page.tsx           # Prompt Library
│   ├── resources/page.tsx         # Resources page
│   └── page.tsx                   # Homepage
├── components/
│   ├── ui/Button.tsx              # Reusable button component
│   ├── ModuleCard.tsx             # Module grid cards
│   ├── PromptCard.tsx             # Prompt cards
│   ├── VideoPlayer.tsx            # YouTube embed
│   ├── Header.tsx                 # Site header
│   └── Footer.tsx                 # Site footer
├── data/
│   ├── modules.ts                 # All lesson content
│   └── prompts.ts                 # All prompt content
├── lib/
│   ├── progress.ts                # LocalStorage progress tracking
│   └── utils.ts                   # Utility functions
├── public/
│   └── pdfs/                      # Generated PDF files
├── pdf-sources/                   # Markdown source for PDFs
├── scripts/
│   ├── generate-pdfs.mjs          # PDF generation script
│   └── pdf-style.css              # PDF styling
└── netlify.toml                   # Deployment config
```

---

## 📊 Key Metrics & Stats

### Content Volume
- **4** learning modules
- **20** video lessons
- **40+** ready-to-use prompts
- **5** downloadable PDF guides (100+ pages total)
- **15+** external resources curated
- **~2.5 hours** of lesson content (estimated)

### User Experience
- **No login required** - Uses localStorage for progress
- **100% free** - No paywalls, no subscriptions
- **Privacy-first** - No tracking, no data collection
- **Fully responsive** - Works on all devices
- **Offline-capable PDFs** - Resources work without internet

### Technical Performance
- **Static site generation** for fast loading
- **Edge functions** for API routes
- **Optimised images** - Unoptimized but small assets
- **CDN delivery** via Netlify

---

## 🚀 Deployment

### Current Setup
- **Hosting:** Netlify
- **URL:** https://alongside-ai-basics.netlify.app
- **Deploy Method:** Git push to main branch (auto-deploy)
- **Build Command:** `npm run build`
- **Functions:** Serverless via @netlify/plugin-nextjs

### Environment
- No environment variables required
- API keys are user-provided (client-side)
- All content is static or generated at build time

### Deployment Process
1. Push to GitHub main branch
2. Netlify detects change
3. Runs `npm run build`
4. Deploys to production automatically
5. CDN cache updates (~1-2 minutes)

---

## 📝 Content Management

### Adding New Lessons
1. Edit `data/modules.ts`
2. Add lesson object with:
   - id, title, description
   - videoId (YouTube)
   - duration (minutes)
   - optional resources array
3. Build and deploy

### Adding New Prompts
1. Edit `data/prompts.ts`
2. Add prompt object with:
   - id, title, description
   - prompt text
   - category, tags, difficulty
   - optional example
3. Build and deploy

### Updating PDFs
1. Edit markdown files in `pdf-sources/`
2. Run `npm run generate-pdfs`
3. Commit and push updated PDFs

---

## 🔐 Privacy & Security

### Data Storage
- **Progress tracking:** localStorage only (client-side)
- **API keys:** localStorage only (never sent to our servers)
- **Conversations:** Browser memory only (not persisted)
- **No analytics:** No tracking scripts (yet)
- **No cookies:** None set by our site

### Third-Party Services
- **YouTube embeds:** For video lessons (Google privacy policy applies)
- **Claude API:** Direct from browser to Anthropic (we don't proxy conversations)
- **Netlify:** Hosting only (no tracking enabled)

### Safety Features
- Privacy reminders throughout interface
- Clear guidance on what not to share
- Examples of safe prompt rewrites
- Age-appropriate content guidelines
- Links to safeguarding resources (NSPCC, Childline, etc.)

---

## 🎯 Target Audience

### Primary Users
- **Parents** - Looking to understand and use AI safely with their families
- **Guardians** - Responsible for children's technology use
- **Educators** - Teachers wanting to guide families
- **Families** - Multi-generational households learning together

### Age Considerations
- **Content:** Written for adult learners (reading age 14+)
- **Application:** Designed to support families with children aged 5-18
- **Accessibility:** Considers diverse learning needs and abilities

### UK Focus
- UK English spelling and vocabulary
- UK cultural references (£, NHS, NSPCC, etc.)
- UK-specific resources and links
- UK safeguarding context

---

## 💡 Pedagogical Approach

### Learning Design
- **Chunked content:** Short 5-15 minute lessons
- **Practical application:** Every lesson connects to real family tasks
- **Progressive complexity:** Basics → Application → Safety → Specific Needs
- **Multiple modalities:** Video, text, interactive practice, downloadable guides
- **Just-in-time learning:** Resources available when needed

### Safety-First Philosophy
- Safety integrated throughout, not just one module
- Emphasis on privacy protection
- Clear guidance on limitations
- Teaching critical thinking, not blind trust
- Family conversations encouraged

### Empowerment Goal
- Give families confidence to use AI
- Reduce fear and anxiety
- Provide practical tools, not just theory
- Support rather than lecture
- Acknowledge mistakes are part of learning

---

## 🔄 Future Extensibility

### Architecture Designed For:
- **Easy content updates** - Centralised data files
- **Additional modules** - Simple to add to array
- **New features** - Component-based architecture
- **API integrations** - Modular API routes
- **Analytics** - Can add without major refactoring
- **User accounts** - Can layer on top of existing localStorage approach
- **Multilingual** - Structure supports i18n

### Potential Integrations:
- Resend (email/newsletter) - Already in dependencies
- Supabase (optional user accounts) - Already in dependencies
- Upstash Redis (caching) - Already in dependencies
- Analytics platforms (GA, Plausible, etc.)
- LMS integrations
- School/education platforms

---

## 📞 Support & Resources

### For Users
- Contact via The AI Ark website
- Community support through Alongside platforms
- Email: (to be determined)

### For Developers
- GitHub repository
- This documentation
- Inline code comments
- TypeScript types for guidance

---

## 📜 License & Credits

### Content License
- All educational content: © The AI Ark 2024
- Available for free personal and educational use
- Commercial use requires permission

### Technology Credits
- Built with Next.js and React
- Hosted on Netlify
- AI powered by Anthropic's Claude
- PDF generation using md-to-pdf
- Icons and emoji used for visual interest

### Contributors
- **Judith Reece** - Founder, The AI Ark
- **Claude (Anthropic)** - AI assistant for development
- **The AI Ark Team** - Feedback and guidance (Ang, Natasha, Lottie)

---

*Last Updated: May 2024*
*Version: 1.0 (MVP)*
