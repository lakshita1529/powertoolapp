import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/GuideSection.module.css'; // Update styles here

const GuideItem = ({ title, description, iconSrc, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={styles.guideItem} onClick={handleClick}>
      <div className={styles.guideContent}>
        <h3 className={styles.guideTitle}>{title}</h3>
        <p className={styles.guideDescription}>{description}</p>
      </div>
      <div className={styles.guideArrow}>
        <img src={iconSrc} alt="arrow" className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default GuideItem;
