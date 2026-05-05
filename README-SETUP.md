# Alongside AI Basics - Setup Guide

## ✅ What's Been Built (MVP - Phase 1)

### Completed Features:
- ✅ **Homepage** with all 4 modules displayed as cards
- ✅ **Module detail pages** with video players for all 20+ lessons
- ✅ **Progress tracking** (localStorage-based, works offline)
- ✅ **Header & Footer** with links to The AI Ark
- ✅ **Responsive design** (mobile-first)
- ✅ **All 4 curriculum modules** defined:
  - AI Basics for Families (4 lessons)
  - Practical AI for Everyday Life (6 lessons)
  - AI Safety & Ethics (6 lessons)
  - AI for Specific Needs (4 lessons)

### What's Ready:
- ✅ 20 lesson placeholders (just need real YouTube video IDs)
- ✅ Progress bars and completion tracking
- ✅ Beautiful gradient cards for each module
- ✅ Clean, accessible UI

---

## 🚀 Current Status

**The site is running at: http://localhost:3000**

You can:
1. **View the homepage** with all 4 modules
2. **Click into any module** to see lessons
3. **Watch videos** (currently placeholder IDs)
4. **Mark lessons complete** and see progress tracking work
5. **Navigate** between pages

---

## 📝 Next Steps to Launch

### 1. Replace Placeholder YouTube IDs (Priority 1)

**File to edit:** `data/modules.ts`

Find lines like:
```typescript
videoId: 'dQw4w9WgXcQ', // REPLACE: Placeholder YouTube ID
```

Replace with your actual YouTube video IDs. Example:
- Upload your video to YouTube (unlisted is fine)
- Get the video ID from the URL: `https://youtube.com/watch?v=YOUR_VIDEO_ID`
- Replace `dQw4w9WgXcQ` with `YOUR_VIDEO_ID`

### 2. Create Environment File

Create `.env.local` file in the project root:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_THEAIARK_URL=https://theaiark.org

# Supabase (for later - prompt library)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Anthropic (for later - playground)
ANTHROPIC_API_KEY=sk-ant-...

# Resend (for later - newsletter)
RESEND_API_KEY=re_...
```

### 3. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set up custom domain (basics.theaiark.org)
vercel domains add basics.theaiark.org
```

---

## 🎯 Phase 2 Features (Next 8 hours)

After replacing video IDs and deploying Phase 1:

1. **Prompt Library** (2 hours)
   - Supabase table for prompts
   - Browse/search UI
   - Copy-to-clipboard

2. **Interactive Playground** (2 hours)
   - Claude API integration
   - IP rate limiting
   - Simple prompt → response UI

3. **Newsletter Signup** (1 hour)
   - Resend integration
   - Save to Supabase
   - Welcome email

4. **Resources Page** (1 hour)
   - Downloadable PDFs
   - Safety guides
   - Cheat sheets

5. **Analytics** (30 min)
   - Google Analytics 4
   - Custom events

6. **Polish & Testing** (1.5 hours)
   - Mobile testing
   - Bug fixes
   - Performance optimization

---

## 📁 Project Structure

```
alongside-ai-basics/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage with module cards
│   └── modules/
│       └── [moduleId]/
│           └── page.tsx        # Module detail with video player
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Footer.tsx              # Links to AI Ark, Alongside
│   ├── ModuleCard.tsx          # Module cards on homepage
│   ├── VideoPlayer.tsx         # YouTube embed + completion
│   └── ui/
│       └── Button.tsx          # Reusable button component
├── data/
│   └── modules.ts              # All 4 modules + 20 lessons
├── lib/
│   ├── progress.ts             # localStorage progress tracking
│   └── utils.ts                # Utility functions
├── public/
│   └── pdfs/                   # Add PDFs here later
└── .env.local                  # Environment variables (create this)
```

---

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 🎨 Customization Points

### Colors
Currently using Tailwind default colors:
- Blue for AI Basics
- Green for Practical AI
- Red for Safety & Ethics
- Purple for Specific Needs

To change: Edit `components/ModuleCard.tsx` colorClasses object.

### Fonts
Using Inter font. To change: Edit `app/layout.tsx`

### Logo
Update Header.tsx to add your logo image

---

## 📊 Progress Tracking

**How it works:**
- Saves to `localStorage` (browser storage)
- Key: `aiark_progress`
- No server needed
- No user accounts needed
- Works offline

**Data structure:**
```json
{
  "modules": {
    "ai-basics": {
      "moduleId": "ai-basics",
      "lessonsCompleted": ["what-is-ai", "how-ai-works"],
      "startedAt": "2024-05-05T...",
      "completedAt": "2024-05-06T..."
    }
  },
  "totalVideosWatched": 2,
  "lastActivity": "2024-05-06T..."
}
```

**Export/Import:**
- Users can export progress as JSON
- Import on new device (we'll add UI for this in Phase 2)

---

## 🎥 Video Guidelines

When filming your tutorial videos:

1. **Length:** Keep to stated duration (5-15 minutes)
2. **Style:** Conversational, warm, no jargon
3. **Upload:** YouTube (unlisted is fine for privacy)
4. **Quality:** 1080p minimum
5. **Captions:** YouTube auto-captions are okay, but manual is better
6. **Thumbnails:** Clear, consistent branding

---

## 🚀 Quick Deploy Checklist

Before deploying to production:

- [ ] Replace all placeholder video IDs
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Set up Vercel project
- [ ] Configure custom domain (basics.theaiark.org)
- [ ] Add Google Analytics ID (optional)
- [ ] Test progress tracking
- [ ] Check cross-browser (Chrome, Safari, Firefox)

---

## 💡 Tips

**For filming videos:**
- Film in batches (do all Module 1 in one session)
- Use consistent intro/outro
- Keep energy high (families need engaging content!)
- Show real examples on screen

**For launch:**
- Start with Module 1 only if needed (add others later)
- Test with 5-10 beta users before public launch
- Get feedback on video pacing
- Monitor which modules are most popular

---

## 🐛 Known Issues / To Fix

None yet! Fresh build.

---

## 📞 Support

Built with cr8.io & MAJK by Claude.

For questions:
- Check the comprehensive planning docs in `/products/ai-ark-alongside-ai-basics/`
- All specifications are documented
- Technical implementation details in Section 08

---

## 🎉 You Did It!

You now have a fully functional AI education platform!

**What users can do right now:**
- Browse all 4 modules
- Watch lessons (once you add real video IDs)
- Track their progress
- See completion percentages
- Navigate easily
- Use on any device

**Time to Phase 1 completion:** ~2 hours of focused work (mostly filming videos!)

Ready to change the world with AI education? Let's go! 🚀
