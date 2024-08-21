import React from 'react';
import { IconButton } from '@mui/material';
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import styles from './Icons.module.css';

const Icons = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.card}>
      <IconButton
        className={`${styles.socialContainer} ${styles.instagram}`}
        onClick={() => handleIconClick('https://www.instagram.com')}
      >
        <Instagram className={styles.socialSvg} />
      </IconButton>

      <IconButton
        className={`${styles.socialContainer} ${styles.facebook}`}
        onClick={() => handleIconClick('https://www.facebook.com')}
      >
        <Facebook className={styles.socialSvg} />
      </IconButton>

      <IconButton
        className={`${styles.socialContainer} ${styles.linkedin}`}
        onClick={() => handleIconClick('https://www.linkedin.com')}
      >
        <LinkedIn className={styles.socialSvg} />
      </IconButton>

      <IconButton
        className={`${styles.socialContainer} ${styles.twitter}`}
        onClick={() => handleIconClick('https://twitter.com')}
      >
        <Twitter className={styles.socialSvg} />
      </IconButton>
    </div>
  );
};

export default Icons;
