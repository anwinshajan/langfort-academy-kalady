'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './VideoLibrary.module.css';

const videos = [
  {
    id: 'vOEW9yIDrCk',
    title: 'OET Listening Part - C | Guided Practice',
    category: 'OET Listening',
  },
  {
    id: 'cMnSp4qEXNM',
    title: 'OET Writing | Write a letter to patient\'s GP',
    category: 'OET Writing',
  },
  {
    id: 'GFRiZiWwjgY',
    title: 'IELTS Speaking | Describe a daily routine',
    category: 'IELTS Speaking',
  },
  {
    id: 'wWLy5Oo-5Q8',
    title: 'OET Speaking Tips | Empathizing Phrases & Summarizing',
    category: 'OET Speaking',
  },
  {
    id: 'J39RMXgbHng',
    title: 'OET Speaking Role-play | Abdominal Discomfort',
    category: 'OET Speaking',
  },
  {
    id: 'QhGZ-8S7PQk',
    title: 'OET Reading Tips | Strategies for Effective Comprehension',
    category: 'OET Reading',
  },
];

export default function VideoLibrary() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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

        {/* Carousel controls */}
        <div className={styles.carouselControls}>
          <button
            className={`${styles.scrollBtn} ${!canScrollLeft ? styles.scrollBtnDisabled : ''}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className={`${styles.scrollBtn} ${!canScrollRight ? styles.scrollBtnDisabled : ''}`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Video carousel */}
        <div className={styles.carousel} ref={scrollRef}>
          {videos.map((video, i) => (
            <div
              key={video.id}
              className={`${styles.videoCard} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
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
