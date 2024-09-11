import React from 'react';
import styles from '../../../styles/WorkManagement.module.css';

const TextBlock = ({ title, description }) => {
  return (
    <div className={styles.textBlock}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TextBlock;