import React, { useState } from 'react';
import styles from '../../styles/Automation.module.css'; // Adjust the path as necessary

const GuideItem = ({ title, description, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className={styles.guideItem}>
      <div
        className={styles.guideHeader}
        onClick={handleClick}
        onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
        tabIndex="0"
        aria-expanded={isOpen}
        role="button"
      >
        <h3 className={styles.guideTitle}>{title}</h3>
        <span className={isOpen ? styles.iconOpen : styles.iconClosed}>▼</span>
      </div>

      {isOpen && (
        <div className={styles.guideDescription}>
          {/* Description Rendering */}
          {description.split('\n').map((line, index) => {
            const trimmedLine = line.trim();

            if (trimmedLine === 'Feature Mechanics:') {
              return (
                <p key={index} className={styles.featureMechanics}>
                  {trimmedLine}
                </p>
              );
            }

            if (/^[✨🔄👤🔲📅⏳]/.test(trimmedLine)) {
              return (
                <h5 key={index} className={styles.subheading}>
                  {trimmedLine}
                </h5>
              );
            }

            if (/^·/.test(trimmedLine)) {
              return (
                <li key={index} className={styles.bulletPoint}>
                  {trimmedLine.replace(/^·/, '').trim()}
                </li>
              );
            }

            return (
              <p key={index} className={styles.descriptionLine}>
                {trimmedLine}
              </p>
            );
          })}

          {/* Conditional Image Rendering */}
          {imageSrc && (
            <div className={styles.imageContainer}>
              <img src={imageSrc} alt={`${title} illustration`} className={styles.image} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GuideItem;
