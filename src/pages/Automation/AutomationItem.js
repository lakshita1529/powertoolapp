import React, { useState } from 'react';
import styles from '../../styles/Automation.module.css'; // Update the import if necessary

const GuideItem = ({ title, description, iconSrc, path }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className={styles.guideItem}>
      <div className={styles.guideContent} onClick={handleClick}>
        <h3 className={styles.guideTitle}>{title}</h3>
        <div className={styles.dropdownIcon}>
          <span className={isOpen ? styles.iconOpen : styles.iconClosed}>▼</span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.guideDescription}>
          {description}
        </div>
      )}
    </div>
  );
};

export default GuideItem;
