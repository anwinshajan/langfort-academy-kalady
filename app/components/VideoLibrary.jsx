'use client';

import { useEffect, useRef } from 'react';
import styles from './VideoLibrary.module.css';

const videos = [
  {
    id: 'NKjjLO4PxZk',
    title: 'Langfort Academy - Video 1',
    category: 'OET',
  },
  {
    id: 'RJbl6trjMrg',
    title: 'Langfort Academy - Video 2',
    category: 'IELTS',
  },
  {
    id: 'MWtNDAcKPTA',
    title: 'Langfort Academy - Video 3',
    category: 'PTE',
  },
  {
    id: 'Fgm3ujnBIy0',
    title: 'Langfort Academy - Video 4',
    category: 'German Language',
  },
  {
    id: 'ZqwtGaAXUcY',
    title: 'Langfort Academy - Video 5',
    category: 'Spoken English',
  },
];

export default function VideoLibrary() {
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

  const marqueeItems = [...videos, ...videos];

  return (
    <section className={styles.section} id="videos" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <p className={styles.sectionLabel}>Expert Content</p>
          <h2 className="section-title">Interactive Video Library</h2>
          <p className="section-subtitle">
            Learn from our expert trainers with curated video lessons covering every aspect of your exam preparation.
          </p>
        </div>
      </div>

      {/* Auto Scroll Marquee */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((video, i) => (
            <div
              key={`${video.id}-${i}`}
              className={styles.videoCard}
            >
              <div className={styles.thumbnailWrap}>
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className={styles.thumbnail}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #1e3a5f, #2563eb)';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                  }}
                />
                <div className={styles.playOverlay}>
                  <div className={styles.playBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                      <polygon points="8 5 20 12 8 19 8 5" />
                    </svg>
                  </div>
                </div>
                <span className={styles.category}>{video.category}</span>
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.watchLink}
                >
                  Watch on YouTube
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
