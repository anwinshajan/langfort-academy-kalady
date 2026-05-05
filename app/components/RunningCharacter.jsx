'use client';

import styles from './RunningCharacter.module.css';

export default function RunningCharacter() {
  return (
    <div className={styles.runningWrapper}>
      <div className={styles.character}>
        <img 
          src="/running-student.png" 
          alt="Running student" 
          className={styles.characterImg} 
        />
      </div>
    </div>
  );
}
