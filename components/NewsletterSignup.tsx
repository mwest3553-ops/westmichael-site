"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-md border border-border bg-surface p-6 md:p-8">
      <h3 className="text-h3 font-semibold text-ink">Subscribe</h3>
      <p className="mt-2 text-meta text-muted">Get new posts in your inbox.</p>
      {submitted ? (
        <p className="mt-5 text-meta text-accent">
          Thanks — this is a placeholder UI; wire it to Mailchimp or Resend when you're ready.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-sm border border-border-strong bg-bg px-4 py-2.5 text-body text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            className="rounded-sm bg-accent px-5 py-2.5 text-meta font-semibold text-ink-dark transition-colors hover:bg-accent-hover"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
