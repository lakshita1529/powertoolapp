import React from 'react';
import styles from '../../../styles/WorkManagement.module.css'; // Adjust the path if necessary

const Button = ({ text, iconSrc, href }) => {
  return (
    <a href={href} className={styles.button} aria-label={text}>
      <span className={styles.buttonText}>{text}</span>
      {iconSrc && <img src={iconSrc} alt="" className={styles.buttonIcon} />}
    </a>
  );
};

export default Button;
