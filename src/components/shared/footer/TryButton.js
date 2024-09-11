import React from 'react';
import styles from '../../../styles/Footer.module.css';

const TryButton = () => {
  return (
    <div className={styles.tryBtn}>
      <h3 className={styles.tryTitle}>Try It Today</h3>
      <p className={styles.tryDescription}>
        Get started for free. Add your whole team as your needs grow.
      </p>
    </div>
  );
};

export default TryButton;