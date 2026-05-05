# Known Issues & Limitations

**Last Updated:** May 2024
**Status:** MVP - Known incomplete areas

---

## 🚨 Critical Missing Content

### 1. Video Content (BLOCKER)
**Status:** 🔴 All placeholder videos

**Issue:**
- All 20 lessons currently link to placeholder YouTube video ID: `dQw4w9WgXcQ`
- This is Rick Astley's "Never Gonna Give You Up" (the Rickroll)
- Users will see music video instead of educational content

**Impact:** HIGH
- Users cannot actually learn from video lessons
- Undermines credibility of the platform
- Makes modules essentially non-functional

**What's Needed:**
- 20 educational videos covering lesson topics
- Either create original content or source appropriate existing videos
- YouTube IDs to replace placeholders in `data/modules.ts`

**Estimated Effort:** High - requires video production or curation

---

### 2. PDF Resources Not Complete
**Status:** 🟡 Some references to non-existent PDFs

**Issue:**
- Lesson resources link to PDFs that don't exist yet:
  - `/pdfs/ai-basics-cheat-sheet.pdf` ✅ EXISTS
  - `/pdfs/family-safety-guide.pdf` ✅ EXISTS
  - `/pdfs/homework-help-guide.pdf` ✅ EXISTS
  - `/pdfs/family-ai-agreement.pdf` ✅ EXISTS
  - `/pdfs/prompt-engineering-guide.pdf` ✅ EXISTS

**Actually:** All main PDFs now exist! But lessons reference additional specific PDFs that aren't created yet.

**Impact:** Medium
- Some lesson-specific resources are missing
- General guides are available

**What's Needed:**
- Review lesson resources in `data/modules.ts`
- Create any additional referenced PDFs
- Or remove dead links

**Estimated Effort:** Medium - depends on how many are actually needed

---

## 🔧 Technical Debt

### 3. Git Configuration Warnings
**Status:** 🟡 Cosmetic but annoying

**Issue:**
```
Committer: Reece Advisory Ltd <reeceadvisory@Reeces-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname.
```

**Impact:** Low
- Commits work fine
- Just needs proper git config

**Fix:**
```bash
git config --global user.name "Judith Reece"
git config --global user.email "judith@reeceadvisory.com"
```

**Estimated Effort:** 1 minute

---

### 4. NPM Dependency Vulnerabilities
**Status:** 🟡 Mostly dev dependencies

**Issue:**
```
11 vulnerabilities (1 low, 7 moderate, 1 high, 2 critical)
```

**Details:**
- Most are in `markdown-pdf` (deprecated package)
- Some in `md-to-pdf` dependencies
- Not affecting production site (only PDF generation script)

**Impact:** Low
- Dev dependencies only
- PDF generation works fine
- Not exposed to users

**Fix Options:**
1. Accept the risk (PDFs are generated locally)
2. Switch to different PDF generation library
3. Generate PDFs manually when needed

**Estimated Effort:** Low to medium depending on approach

---

### 5. No Environment Variables Setup
**Status:** 🟢 Working as designed, but could be better

**Issue:**
- No `.env` file
- No environment-specific configuration
- API keys are user-provided (intentional)

**Impact:** None currently
- Working as designed for MVP
- May need for future features (newsletter, analytics, etc.)

**What's Needed:**
- Only add when required for new features

**Estimated Effort:** Low - when needed

---

## 🎨 User Experience Issues

### 6. No Analytics or Tracking
**Status:** 🟡 Intentional for privacy, but limiting insights

**Issue:**
- No way to know how many users
- Can't see which modules are popular
- Can't identify where users struggle
- No conversion tracking

**Impact:** Medium
- Can't measure success
- Can't make data-driven improvements
- Don't know if anyone is using it

**Options:**
1. Privacy-friendly analytics (Plausible, Fathom)
2. Self-hosted analytics
3. Stay privacy-first with no tracking

**Estimated Effort:** Low - just add script tag

---

### 7. No User Feedback Mechanism
**Status:** 🟡 Users can't report issues or give feedback

**Issue:**
- No "Report a problem" button
- No lesson ratings
- No way to suggest improvements
- No contact form

**Impact:** Medium
- Missing valuable user input
- Can't catch errors users find
- No way to gauge satisfaction

**What's Needed:**
- Simple feedback form
- Or link to email/form
- Or ratings on lessons

**Estimated Effort:** Low to medium

---

### 8. Search Only in Prompts
**Status:** 🟡 Limited search functionality

**Issue:**
- Prompts page has search ✅
- But can't search across:
  - Lesson content
  - Resource titles
  - All content globally

**Impact:** Low
- Site is small enough to browse
- But would improve UX for larger content

**What's Needed:**
- Global search component
- Search index of all content
- Search results page

**Estimated Effort:** Medium

---

### 9. Mobile Experience Could Be Better
**Status:** 🟡 Responsive but not optimised

**Issue:**
- Site is responsive ✅
- But some areas could be more mobile-friendly:
  - Video player on small screens
  - Long scrolling on some pages
  - Touch targets could be larger

**Impact:** Low to medium
- Works but not optimal
- Depends on user base (mobile vs desktop)

**What's Needed:**
- Mobile usability testing
- Refinements based on feedback

**Estimated Effort:** Medium

---

## ♿ Accessibility Issues

### 10. Accessibility Not Fully Audited
**Status:** 🟡 Basic accessibility, not comprehensive

**Issue:**
- Haven't run full WCAG audit
- Screen reader testing not complete
- Keyboard navigation works but not tested thoroughly
- Some ARIA labels may be missing
- Colour contrast good but not verified everywhere

**Impact:** Medium
- May exclude users with disabilities
- Could fail accessibility requirements
- Best practice to address

**What's Needed:**
- Run automated audit (Lighthouse, axe)
- Screen reader testing
- Keyboard-only navigation testing
- Fix identified issues

**Estimated Effort:** Medium - depends on findings

---

### 11. Video Captions/Transcripts
**Status:** 🔴 No captions or transcripts

**Issue:**
- Once real videos are added, need:
  - Captions/subtitles
  - Text transcripts
  - Alternative text descriptions

**Impact:** High for accessibility
- Excludes deaf/hard of hearing users
- Required for true accessibility

**What's Needed:**
- Generate or write transcripts
- Add captions to videos
- Provide text alternatives

**Estimated Effort:** High - per video

---

## 🔒 Security & Privacy

### 12. API Key Storage Security
**Status:** 🟢 Acceptable for MVP, but could be better

**Issue:**
- API keys stored in localStorage
- Visible in browser dev tools
- No encryption (browser limitation)
- User's responsibility to keep safe

**Impact:** Low
- Standard approach for client-side apps
- Users should use free tier keys
- Clear privacy messaging

**What's Needed:**
- Documentation about API key safety
- Warnings not to share API keys
- Consider optional backend proxy for keys

**Estimated Effort:** Low (documentation) to High (backend proxy)

---

### 13. No Rate Limiting on Playground
**Status:** 🟡 Could lead to unexpected API costs

**Issue:**
- Users could accidentally use lots of API credits
- No usage tracking
- No cost estimates
- No warnings about spending

**Impact:** Medium
- Users' problem, not ours
- But could lead to bad experience
- Ethical consideration

**What's Needed:**
- Usage tracking (optional)
- Cost estimates per message
- Warnings at certain thresholds
- Link to Anthropic billing page

**Estimated Effort:** Medium

---

## 📱 Feature Gaps

### 14. No Newsletter Signup
**Status:** 🟡 Resend installed but not implemented

**Issue:**
- Can't collect emails for updates
- Can't build community
- Can't announce new content
- Resend package installed but unused

**Impact:** Medium
- Missing engagement opportunity
- Can't communicate with users

**What's Needed:**
- Newsletter signup form
- Resend integration
- Welcome email
- Privacy policy update

**Estimated Effort:** Medium

---

### 15. No Social Sharing
**Status:** 🟡 Can't share progress or content

**Issue:**
- No "Share" buttons
- Can't share lesson completions
- Can't share prompts
- No Open Graph tags for nice link previews

**Impact:** Low
- Missing organic growth opportunity
- Word of mouth harder

**What's Needed:**
- Social share buttons
- Open Graph meta tags
- Twitter Cards
- Share images

**Estimated Effort:** Low to medium

---

### 16. No Progress Sync Across Devices
**Status:** 🟡 localStorage is device-specific

**Issue:**
- Progress tracked locally only
- Can't access from different device
- Lost if browser cache cleared
- No way to export/import progress

**Impact:** Medium
- Frustrating for multi-device users
- But keeps it simple and private

**What's Needed:**
- Optional user accounts
- Cloud sync (Supabase installed)
- Or export/import feature

**Estimated Effort:** High (accounts) or Medium (export)

---

### 17. No Completion Certificates
**Status:** 🟡 No reward for completing modules

**Issue:**
- Can complete all modules
- Get no tangible recognition
- No downloadable certificate
- No share-able achievement

**Impact:** Low
- Would be nice motivation
- Not essential for learning

**What's Needed:**
- Certificate design
- PDF generation with user name
- Completion detection

**Estimated Effort:** Medium

---

### 18. No Quiz/Assessment Features
**Status:** 🟡 No way to test knowledge

**Issue:**
- Passive learning only (watch videos)
- No interactive questions
- Can't verify understanding
- No knowledge checks

**Impact:** Medium
- Reduces learning effectiveness
- Can't measure comprehension

**What's Needed:**
- Quiz component
- Questions per lesson
- Score tracking
- Explanations for wrong answers

**Estimated Effort:** High

---

## 🌍 Content Gaps

### 19. UK-Specific Only
**Status:** 🟡 Great for UK, not for other markets

**Issue:**
- UK English only
- UK cultural references (£, NHS, etc.)
- UK safeguarding resources
- Not accessible to international users

**Impact:** Medium
- Limits audience
- But MVP focused on UK is fine

**What's Needed:**
- Internationalization (i18n)
- Multiple language support
- Region-specific resources

**Estimated Effort:** High

---

### 20. Limited Module Content
**Status:** 🟡 Good start but could be more

**Issue:**
- Only 4 modules
- Could cover more topics:
  - AI for work/careers
  - AI tools in-depth guides
  - Advanced techniques
  - Specific industries

**Impact:** Low to medium
- MVP is focused and complete
- But more content would add value

**What's Needed:**
- Additional modules planned
- Community-suggested topics
- Guest content

**Estimated Effort:** High - ongoing

---

### 21. No Community Features
**Status:** 🟡 Isolated learning experience

**Issue:**
- No way to connect with other learners
- Can't ask questions to community
- No user-submitted prompts
- No discussions or forums

**Impact:** Low
- Nice to have
- Not essential for MVP

**What's Needed:**
- Forum or discussion board
- Comment system
- Community prompts submission

**Estimated Effort:** Very high

---

## 🎯 Domain & Hosting

### 22. Not on Custom Domain
**Status:** 🟡 Using Netlify subdomain

**Current:** `alongside-ai-basics.netlify.app`
**Desired:** `basics.theaiark.org` (potentially)

**Impact:** Low
- Works fine on Netlify domain
- Custom domain more professional

**What's Needed:**
- Domain DNS configuration
- Netlify custom domain setup
- SSL certificate (automatic)

**Estimated Effort:** Low - 15 minutes

---

## 📊 Summary

### Critical (Must Fix Before Launch)
1. ⚠️ **Video Content** - All placeholders, site non-functional
2. ⚠️ **Video Captions** - Accessibility requirement

### High Priority (Should Fix Soon)
3. 🔸 **User Feedback Mechanism** - Need to hear from users
4. 🔸 **Analytics** - Can't measure success without it
5. 🔸 **Accessibility Audit** - Important for inclusion

### Medium Priority (Nice to Have)
6. 🔹 **Newsletter Signup** - Build community
7. 🔹 **Rate Limiting Protection** - Help users manage costs
8. 🔹 **Progress Sync** - Better multi-device experience
9. 🔹 **Mobile Optimisation** - Improve UX
10. 🔹 **Search Across All Content** - Better navigation

### Low Priority (Future Enhancement)
11. 🔹 **Completion Certificates** - Motivation boost
12. 🔹 **Quiz Features** - Enhanced learning
13. 🔹 **Social Sharing** - Organic growth
14. 🔹 **Custom Domain** - Professional polish
15. 🔹 **More Modules** - Expand content

### Technical Housekeeping
16. 🔧 **Git Config** - 1 minute fix
17. 🔧 **Dependency Vulnerabilities** - Low risk, can wait

---

*This list will evolve based on team feedback and user testing.*
