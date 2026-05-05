'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './OETPackages.module.css';

const pathways = [
  {
    id: 'beginners',
    label: 'OET Online for Beginners',
    icon: '🎓',
    description: 'Start your OET journey with comprehensive beginner-friendly modules designed to build a strong foundation.',
    features: ['Complete basics coverage', 'Live interactive sessions', 'Practice materials included', 'Doubt-clearing sessions'],
  },
  {
    id: 'repeaters',
    label: 'OET Online for Repeaters',
    icon: '🔄',
    description: 'Targeted intensive program for those retaking OET. Focus on weak areas with advanced strategies.',
    features: ['Score analysis & gap identification', 'Intensive mock tests', 'One-on-one mentoring', 'Success guarantee support'],
  },
];

const packages = [
  {
    name: 'Ruby Pack',
    icon: '💎',
    color: '#e11d48',
    popular: false,
    features: ['Basic Study Materials', 'Group Sessions', 'Email Support', 'Practice Tests'],
  },
  {
    name: 'Golden Pack',
    icon: '🏆',
    color: '#f59e0b',
    popular: false,
    features: ['Enhanced Materials', 'Group + Individual Sessions', 'Priority Support', 'Mock Tests & Feedback'],
  },
  {
    name: 'Diamond Pack',
    icon: '💠',
    color: '#06b6d4',
    popular: false,
    features: ['Premium Materials', 'Unlimited Group Sessions', 'Live Doubt Clearing', 'Weekly Mock Tests'],
  },
  {
    name: 'Platinum Pack',
    icon: '⭐',
    color: '#8b5cf6',
    popular: true,
    features: ['All Diamond Features', 'Personal Mentor', '1-on-1 Speaking Practice', 'Score Guarantee'],
  },
  {
    name: 'Platinum Plus (Doctors)',
    icon: '👨‍⚕️',
    color: '#10b981',
    popular: false,
    features: ['Doctor-specific Modules', 'Medical Case Studies', 'Referral Letter Practice', 'Expert Doctor Trainers'],
  },
  {
    name: 'Platinum Pack (Doctors)',
    icon: '🏥',
    color: '#3b82f6',
    popular: false,
    features: ['Complete Doctor Prep', 'Role-play Sessions', 'Medical Writing Focus', 'Flexible Schedule'],
  },
  {
    name: 'OET Premium Pack',
    icon: '👑',
    color: '#ec4899',
    popular: false,
    features: ['Everything in Platinum Plus', 'Unlimited Mock Tests', 'Lifetime Material Access', 'Job Assistance'],
  },
  {
    name: 'Platinum Plus Crash (10 Days)',
    icon: '⚡',
    color: '#f97316',
    popular: false,
    features: ['10-Day Intensive', 'Daily 4-Hour Sessions', 'Quick Score Boost', 'Final Week Mock Tests'],
  },
];

export default function OETPackages() {
  const [activeTab, setActiveTab] = useState('pathways');
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

  return (
    <section className={styles.section} id="oet-packages" ref={sectionRef}>
      {/* Background decoration */}
      <div className={styles.bgDecor}></div>

      <div className="container">
        <div className="reveal">
          <p className={styles.sectionLabel}>OET Virtual Classroom</p>
          <h2 className="section-title">
            Choose Your OET Path
          </h2>
          <p className="section-subtitle">
            Whether you&apos;re just starting or looking to improve your score, we have the right package for you.
          </p>
        </div>

        {/* Tabs */}
        <div className={`${styles.tabs} reveal`}>
          <button
            className={`${styles.tab} ${activeTab === 'pathways' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('pathways')}
            id="tab-pathways"
          >
            <span>🎯</span> Pathways
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'packages' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('packages')}
            id="tab-packages"
          >
            <span>📦</span> Course Packages
          </button>
        </div>

        {/* Pathways Content */}
        {activeTab === 'pathways' && (
          <div className={styles.pathways}>
            {pathways.map((path, i) => (
              <div
                key={path.id}
                className={`${styles.pathwayCard} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={styles.pathwayIcon}>{path.icon}</div>
                <h3 className={styles.pathwayTitle}>{path.label}</h3>
                <p className={styles.pathwayDesc}>{path.description}</p>
                <ul className={styles.pathwayFeatures}>
                  {path.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn btn-primary ${styles.pathwayBtn}`}>
                  Join Now
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Packages Content */}
        {activeTab === 'packages' && (
          <div className={styles.packagesGrid}>
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`${styles.packageCard} ${pkg.popular ? styles.packagePopular : ''} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.packageIcon} style={{ background: `${pkg.color}15` }}>
                  <span>{pkg.icon}</span>
                </div>
                <h3 className={styles.packageName} style={{ color: pkg.color }}>
                  {pkg.name}
                </h3>
                <ul className={styles.packageFeatures}>
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={pkg.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={styles.packageBtn}
                  style={{
                    borderColor: `${pkg.color}40`,
                    color: pkg.color,
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
