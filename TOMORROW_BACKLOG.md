# Tomorrow's 3-Hour Sprint Backlog

**Date:** Tomorrow
**Time Available:** 3 hours
**Focus:** Quick wins and high-impact improvements (excluding video creation)

---

## ⚠️ Important: Deployment Strategy

**Deploy ONCE at end of day only!**
- Bundle all changes together
- Test locally with `npm run build` throughout day
- Commit after each task
- **Single deployment** at very end with all improvements
- **Why:** Conserve Netlify credits (used 164.9 today)

**Local testing:**
```bash
npm run build  # Test production build
npm run dev    # Quick development server
```

---

## 🎯 Sprint Goals

1. Add mechanisms to collect user feedback
2. Improve discoverability and navigation
3. Set up basic tracking to understand usage
4. Quick technical housekeeping

---

## ✅ Priority Tasks (Ordered by Value/Effort)

### Task 1: Newsletter Signup (45 minutes)
**Value:** HIGH | **Effort:** Medium | **Status:** Ready to build

**What to Build:**
- Simple email signup form on homepage
- "Stay updated" section in footer
- Resend integration (package already installed)
- Welcome email template
- Privacy notice

**Where:**
- Footer component (visible on all pages)
- Optional: Banner on homepage hero section

**Acceptance Criteria:**
- [ ] Email signup form added to footer
- [ ] Connected to Resend API
- [ ] Welcome email sends successfully
- [ ] Privacy notice included
- [ ] Basic validation (email format)
- [ ] Success/error messages

**Files to Edit:**
- `components/Footer.tsx`
- Create `app/api/newsletter/route.ts`
- Create email template

---

### Task 2: Simple Feedback Button (30 minutes)
**Value:** HIGH | **Effort:** Low | **Status:** Ready to build

**What to Build:**
- Fixed "Give Feedback" button (bottom right corner)
- Opens simple form or links to Google Form/Typeform
- Available on all pages

**Options:**
1. **Quick:** Link to Google Form (5 mins)
2. **Better:** Simple modal with form (30 mins)

**Acceptance Criteria:**
- [ ] Feedback button visible on all pages
- [ ] Users can submit feedback easily
- [ ] Feedback goes to your email/form
- [ ] Thank you message after submission

**Files to Create:**
- `components/FeedbackButton.tsx`
- Add to layout or individual pages

---

### Task 3: Privacy-Friendly Analytics (20 minutes)
**Value:** HIGH | **Effort:** Very Low | **Status:** Easy win

**What to Add:**
- Plausible Analytics (privacy-friendly, GDPR compliant)
- OR Simple page view counter via Netlify Analytics

**Why Plausible:**
- No cookies needed
- GDPR compliant
- Simple dashboard
- Free tier available
- Just add script tag

**Acceptance Criteria:**
- [ ] Analytics script added
- [ ] Tracking page views
- [ ] Can see basic stats
- [ ] Privacy policy updated (if needed)

**Files to Edit:**
- `app/layout.tsx` (add script)

---

### Task 4: Lesson Ratings (40 minutes)
**Value:** MEDIUM | **Effort:** Medium | **Status:** Ready to build

**What to Build:**
- Simple 5-star or thumbs up/down rating at end of each lesson
- "Was this helpful?" question
- Store ratings in localStorage
- Optional: Send to backend later

**Acceptance Criteria:**
- [ ] Rating component at end of each lesson page
- [ ] Users can rate once per lesson
- [ ] Stores rating locally
- [ ] Simple, non-intrusive design

**Files to Edit:**
- Create `components/LessonRating.tsx`
- Update `app/modules/[moduleId]/page.tsx`

---

### Task 5: Better Navigation - Breadcrumbs (25 minutes)
**Value:** MEDIUM | **Effort:** Low | **Status:** Ready to build

**What to Build:**
- Breadcrumb navigation on lesson pages
- "Home > Modules > AI Basics > Lesson 1"
- Helps users know where they are

**Acceptance Criteria:**
- [ ] Breadcrumbs on module pages
- [ ] Breadcrumbs on lesson pages
- [ ] Clickable links to navigate back
- [ ] Mobile-friendly

**Files to Create:**
- `components/Breadcrumbs.tsx`
- Add to module and lesson pages

---

### Task 6: Search Across All Content (45 minutes)
**Value:** MEDIUM | **Effort:** Medium | **Status:** Could be started

**What to Build:**
- Global search bar in header
- Searches across: lesson titles, prompt titles, resource titles
- Simple client-side search (no backend needed)

**Acceptance Criteria:**
- [ ] Search bar in header
- [ ] Searches lessons and prompts
- [ ] Shows results with links
- [ ] Mobile-friendly
- [ ] Clear "no results" message

**Files to Edit:**
- `components/Header.tsx`
- Create `components/GlobalSearch.tsx`
- Create search utility function

---

### Task 7: Custom Domain Setup (15 minutes)
**Value:** LOW-MEDIUM | **Effort:** Very Low | **Status:** Ready if domain available

**What to Do:**
- Set up basics.theaiark.org (or similar)
- Configure DNS
- Update Netlify settings
- Test SSL certificate

**Prerequisites:**
- Need domain access/credentials
- Need to decide on subdomain name

**Acceptance Criteria:**
- [ ] Custom domain configured
- [ ] DNS pointing to Netlify
- [ ] SSL certificate working
- [ ] Redirects from .netlify.app working

**Where:**
- Netlify dashboard
- DNS provider (wherever theaiark.org is hosted)

---

### Task 8: Git Configuration (2 minutes)
**Value:** LOW | **Effort:** Trivial | **Status:** Ready now

**What to Do:**
```bash
git config --global user.name "Judith Reece"
git config --global user.email "judith@reeceadvisory.com"
```

**Acceptance Criteria:**
- [ ] Git commits show correct name/email
- [ ] Warning messages gone

---

### Task 9: Open Graph Tags for Sharing (20 minutes)
**Value:** MEDIUM | **Effort:** Low | **Status:** Ready to build

**What to Add:**
- Meta tags for social media sharing
- Nice preview when links shared on Twitter/Facebook/LinkedIn
- Title, description, image for each page

**Acceptance Criteria:**
- [ ] OG tags in layout
- [ ] Page-specific titles and descriptions
- [ ] Preview image created
- [ ] Test with Twitter/LinkedIn share preview

**Files to Edit:**
- `app/layout.tsx`
- Each page's metadata export

---

### Task 10: "Progress Export" Feature (30 minutes)
**Value:** MEDIUM | **Effort:** Medium | **Status:** Nice bonus

**What to Build:**
- Button to export progress as JSON
- Button to import progress from JSON
- Helps users move between devices or backup

**Acceptance Criteria:**
- [ ] Export button creates downloadable JSON
- [ ] Import button accepts JSON file
- [ ] Progress transfers correctly
- [ ] Clear instructions for users

**Files to Create:**
- `components/ProgressExport.tsx`
- Add to settings or profile area (or create simple settings page)

---

## 📋 Recommended 3-Hour Plan

### Hour 1: High-Impact Quick Wins (60 mins)
1. ✅ **Git Configuration** (2 mins) - Get it done!
2. ✅ **Newsletter Signup** (45 mins) - Build community
3. ✅ **Feedback Button** (13 mins) - Use Google Form option

### Hour 2: User Insights & Navigation (60 mins)
4. ✅ **Analytics** (20 mins) - Know who's using it
5. ✅ **Breadcrumbs** (25 mins) - Better navigation
6. ✅ **Open Graph Tags** (15 mins) - Better sharing

### Hour 3: Enhanced UX (60 mins)
7. ✅ **Lesson Ratings** (40 mins) - Collect feedback
8. ✅ **Custom Domain** (15 mins) - If domain ready
9. ✅ **Buffer time** (5 mins) - Testing and fixes

### Alternative Hour 3 (if custom domain not ready):
7. ✅ **Lesson Ratings** (40 mins)
8. ✅ **Global Search** (20 mins) - Start building it

---

## 🔮 Future Strategic Initiative: Integration with AlongsideSEND

**Context:** Decision made in separate conversation (majk://conversations/f9ef0737-1e7b-4c29-a276-a6102ab14cbf)

**The Plan:**
Instead of maintaining AI Basics as a standalone site, integrate it as a section of alongsidesend.co.uk with links pointing to theaiark.org for hands-on practice exercises.

**Why AlongsideSEND:**
- SEND parents are often seeking educational resources
- Natural fit with educational mission
- Already on Netlify/GitHub under your control
- Avoids maintaining 3+ separate websites

**Proposed Structure:**
```
alongsidesend.co.uk/
├── [existing SEND support content]
├── /ai-basics/                    ← New section (copy from this site)
│   ├── /getting-started
│   ├── /modules
│   ├── /prompts
│   ├── /playground
│   └── /resources
│   └── [prominent CTA to theaiark.org for practice]
```

**Complexity: LOW-MEDIUM**
- **Effort:** 2-4 hours (mostly content migration)
- **Technical:** Very simple - just copy HTML/assets to AlongsideSEND repo
- **AlongsideSEND is static HTML** - no build process complexity
- **Netlify impact:** Zero - same free tier, just more files

**Implementation Steps:**
1. Create `/ai-basics/` folder in AlongsideSEND-website repo
2. Adapt Next.js pages to static HTML (or keep Next.js and deploy as separate folder)
3. Update navigation in AlongsideSEND main site
4. Add prominent "Practice at TheAIARK.org" CTAs throughout
5. Update any absolute URLs to work with new path
6. Test on Netlify staging
7. Deploy to production
8. Optionally: Redirect alongside-ai-basics.netlify.app → alongsidesend.co.uk/ai-basics/

**Benefits:**
- ✅ Single domain to maintain (alongsidesend.co.uk)
- ✅ Better brand coherence (both "Alongside" products)
- ✅ Natural audience fit (parents seeking AI education)
- ✅ Consolidates web presence
- ✅ Saves Netlify deployment credits

**Risks/Considerations:**
- Need to test if AlongsideSEND can handle Next.js or if we convert to static HTML
- May need to update AlongsideSEND branding to accommodate AI Basics
- Need clear navigation so users understand both offerings
- Should update this backlog AFTER initial feedback from team (Ang, Natasha, Lottie)

**When to Do This:**
- AFTER collecting team feedback on current standalone site
- AFTER video content is complete
- AFTER initial user testing shows the concept works
- Probably a 1-2 day project, not part of tomorrow's sprint

**Alternative Approach:**
Keep both sites running initially, then migrate once AI Basics is proven successful.

---

## 🚫 Explicitly Out of Scope Tomorrow

These are HIGH value but need more time or information:

1. **Video Content** - You're handling offline
2. **Integration with AlongsideSEND** - Strategic decision, needs 2-4 hours (see above)
3. **User Accounts** - Too big for 3 hours
4. **Quiz Features** - Too big for 3 hours
5. **Community Forum** - Way too big
6. **Multilingual Support** - Future phase
7. **Mobile App** - Not needed
8. **Certificate Generation** - Nice but not critical
9. **Full Accessibility Audit** - Needs dedicated time

---

## 📦 What You'll Need

### Before Starting:

**For Newsletter:**
- [ ] Resend account (if not already set up)
- [ ] Resend API key
- [ ] Email to send from (e.g., updates@theaiark.org)

**For Analytics:**
- [ ] Plausible account (or just use Netlify built-in)

**For Feedback:**
- [ ] Google Form URL (quick option)
- OR decide on form fields for built-in version

**For Custom Domain:**
- [ ] Access to DNS provider for theaiark.org
- [ ] Decide on subdomain name (basics.theaiark.org?)

**For Open Graph:**
- [ ] Preview image (can create simple branded image)

---

## 🎯 Success Metrics for Tomorrow

By end of tomorrow, you should have:

✅ **3-5 completed tasks** from the list above
✅ **Newsletter signup live** - Can start building email list
✅ **Feedback mechanism** - Can hear from early users
✅ **Analytics working** - Can see if anyone's using it
✅ **Better navigation** - Easier for users to find their way

**Bonus:**
- Custom domain live
- Search working
- Lesson ratings collecting data

---

## 🔄 Task Dependencies

**No Dependencies (Can Do Anytime):**
- Git configuration
- Analytics
- Open Graph tags
- Custom domain

**Slight Dependencies:**
- Newsletter needs Resend setup first
- Feedback button needs form URL or API route
- Breadcrumbs needs understanding of page structure (already done)
- Lesson ratings needs understanding of module structure (already done)

**Can Work in Parallel:**
All tasks are independent - pick any order!

---

## 💡 Pro Tips

1. **Start with Git config** - Get it off your mind (2 mins)
2. **Do analytics early** - Then you can track everything else you build
3. **Use Google Form for feedback** - Fastest option, can improve later
4. **Test each feature** - Before moving to next
5. **Commit frequently** - After each completed task
6. **Take breaks** - 50 mins work, 10 mins break

---

## 📝 Quick Start Checklist

When you start tomorrow:

- [ ] Open this file
- [ ] Choose your 3 tasks for Hour 1
- [ ] Set a timer for 50 minutes
- [ ] Start with git config (quick win!)
- [ ] Build, test, commit after each task
- [ ] Update this document as you go

---

## 🎉 Optional: If You Finish Early

**Super Quick Wins (10-15 mins each):**
- Add "Back to Top" button on long pages
- Improve 404 page with helpful links
- Add loading states to Playground
- Add "Print" button to PDF resources
- Add "Share this page" buttons

---

**Good luck tomorrow! 🚀**

*Focus on completing a few things well rather than starting many things.*
*Each completed task is a win!*
