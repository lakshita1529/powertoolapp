import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles/Header.module.css';
import NavItem from './NavItem';

const navItems = [
  { text: 'Home', hasDropdown: true },
  { text: 'Documentation', hasDropdown: true },
  { text: 'Help', hasDropdown: true },
];

const headerVariants = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const logoVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const Header = () => {
  return (
    <motion.header 
      className={styles.header}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className={styles.logoContainer}
        variants={logoVariants}
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/de75e6430a4bacee585761e62b3a69590d2078b461d882f06273c3fd7581d930?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" 
          alt="Whitepace Logo" 
          className={styles.logoImage}
        />
        <span className={styles.logoText}>PowerTools</span>
      </motion.div>

      <nav className={styles.navMenu}>
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </nav>

    

    
      
    </motion.header>
  );
};

export default Header;
