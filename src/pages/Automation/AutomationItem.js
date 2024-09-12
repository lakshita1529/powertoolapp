import React, { useState } from 'react';
import styles from '../../styles/Automation.module.css'; // Adjust the path as necessary

const GuideItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className={styles.guideItem}>
      <div className={styles.guideHeader} onClick={handleClick}>
        <h3 className={styles.guideTitle}>{title}</h3>
        <span className={isOpen ? styles.iconOpen : styles.iconClosed}>▼</span>
      </div>

      {isOpen && (
        <div className={styles.guideDescription}>
          {/* Split the description by line breaks and render each line with conditional formatting */}
          {description.split('\n').map((line, index) => {
            const trimmedLine = line.trim();

            // Check for "Feature Mechanics" and make it bold
            if (trimmedLine === 'Feature Mechanics:') {
              return (
                <p key={index} className={styles.featureMechanics}>
                  {trimmedLine}
                </p>
              );
            }

            // Check for subheading (lines with emojis like ✨, 🔄, 👤, etc.)
            if (/^[✨🔄👤🔲📅⏳]/.test(trimmedLine)) {
              return (
                <h5 key={index} className={styles.subheading}>
                  {trimmedLine}
                </h5>
              );
            }

            // Check for bullet points (lines that start with `·`)
            if (/^·/.test(trimmedLine)) {
              return (
                <li key={index} className={styles.bulletPoint}>
                  {trimmedLine.replace(/^·/, '').trim()}
                </li>
              );
            }

            // Default to regular text
            return (
              <p key={index} className={styles.descriptionLine}>
                {trimmedLine}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GuideItem;
