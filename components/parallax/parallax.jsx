import React, { useState, useEffect } from 'react';
import styles from '@styles/global.css';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <div
        className={styles.parallaxLayer}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Content for the first parallax layer */}
      </div>
      <div
        className={styles.parallaxLayer}
        style={{ transform: `translateY(${scrollY * 0.8}px)` }}
      >
        {/* Content for the second parallax layer */}
      </div>
      {/* Add more layers as needed */}
    </div>
  );
};

export default ParallaxSection;
