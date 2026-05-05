'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ImageGallery.module.css';

// Placeholder images for the gallery. The user can replace these URLs with their actual images later.
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', alt: 'Students studying together', span: 'large' },
  { id: 2, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop', alt: 'Classroom session', span: 'tall' },
  { id: 3, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop', alt: 'Language lab', span: 'regular' },
  { id: 4, src: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop', alt: 'Group discussion', span: 'wide' },
  { id: 5, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', alt: 'Graduation celebration', span: 'regular' },
  { id: 6, src: 'https://images.unsplash.com/photo-1427504494785-319cecb4ceee?q=80&w=800&auto=format&fit=crop', alt: 'Campus view', span: 'large' },
];

export default function ImageGallery() {
  const sectionRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(`.${styles.animItem}`);
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className={styles.section} id="gallery" ref={sectionRef}>
        <div className="container">
          <div className={`${styles.header} ${styles.animItem}`}>
            <p className={styles.sectionLabel}>Life at Langfort</p>
            <h2 className="section-title">Campus Gallery</h2>
            <p className="section-subtitle">
              Take a glimpse into our vibrant campus, interactive classrooms, and the success stories of our students.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {galleryImages.map((img, i) => (
              <div 
                key={img.id} 
                className={`${styles.imageWrap} ${styles[img.span]} ${styles.animItem}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                onClick={() => setSelectedImg(img.src)}
              >
                <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
                <div className={styles.overlay}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImg(null)} aria-label="Close image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img src={selectedImg} alt="Enlarged view" className={styles.lightboxImg} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
