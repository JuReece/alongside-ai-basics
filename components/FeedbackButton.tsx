'use client';

export function FeedbackButton() {
  return (
    <a
      href="https://forms.office.com/YOUR_FORM_ID"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold flex items-center gap-2 z-50"
    >
      <span>💬</span>
      <span>Give Feedback</span>
    </a>
  );
}
