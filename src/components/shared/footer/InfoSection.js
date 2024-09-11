import React from 'react';
import styles from '../../../styles/Footer.module.css';

const InfoSection = ({ title, items }) => {
  return (
    <div className={styles.infoSection}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      {items.map((item, index) => (
        <div key={index} className={styles.sectionItem}>{item}</div>
      ))}
    </div>
  );
};

export default InfoSection;