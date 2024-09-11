import React from 'react';
import styles from '../../../styles/Header.module.css';

const NavItem = ({ text}) => {
  return (
    <div className={styles.navItem}>
      <a href={`/${text.toLowerCase()}`} className={styles.navLink}>
        {text}
      </a>
    </div>
  );
};

export default NavItem;
