'use client';

import { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Aiswarya Menon',
    role: 'OET Student — Nurse',
    text: 'Langfort transformed my OET preparation. The trainers were incredibly supportive and the mock tests were exactly like the real exam. Got my desired score on the first attempt!',
    rating: 5,
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'OET Student — Doctor',
    text: 'The Platinum Plus pack for doctors was exactly what I needed. Specialized medical scenarios and expert feedback helped me crack OET with a B grade in all modules.',
    rating: 5,
  },
  {
    name: 'Sneha Thomas',
    role: 'IELTS Student',
    text: 'I scored Band 8 in IELTS thanks to Langfort! The speaking practice sessions and writing corrections were game-changers. Highly recommend for anyone targeting high bands.',
    rating: 5,
  },
  {
    name: 'Arun Prasad',
    role: 'German Language Student',
    text: 'Learning German at Langfort was an amazing experience. Fr. Joseph\'s classes from Germany gave us authentic language exposure. Cleared A2 with flying colors!',
    rating: 5,
  },
  {
    name: 'Fathima Zahra',
    role: 'PTE Student',
    text: 'The PTE coaching at Langfort is top-notch. The AI-based practice tools and computer lab sessions prepared me perfectly. Got 79+ in all sections!',
    rating: 5,
  },
  {
    name: 'Kevin George',
    role: 'IELTS Student',
    text: 'Best coaching center in Kerala for IELTS! The faculty is experienced and the study materials are comprehensive. Achieved my target score in just 6 weeks.',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Duplicate for infinite scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className={styles.section} id="testimonials" ref={sectionRef}>
      <div className="container">
        {/* Quote block */}
        <div className={`${styles.quoteBlock} reveal`}>
          <div className={styles.quoteIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#quoteGrad)" strokeWidth="1.5">
              <defs>
                <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>
          <blockquote className={styles.quote}>
            &ldquo;Opportunities are like sunrises. If you wait too long, you miss them.&rdquo;
          </blockquote>
          <cite className={styles.quoteAuthor}>— William Arthur Ward</cite>
        </div>

        {/* Section header */}
        <div className="reveal" style={{ marginTop: 'var(--space-20)' }}>
          <p className={styles.sectionLabel}>What Our Students Say</p>
          <h2 className="section-title">Student Testimonials</h2>
          <p className="section-subtitle">
            Join thousands of successful students who achieved their dreams with Langfort.
          </p>
        </div>
      </div>

      {/* Marquee testimonials */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((t, i) => (
            <div key={`${t.name}-${i}`} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
