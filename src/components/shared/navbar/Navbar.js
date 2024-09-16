import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Using React Router for navigation
import styles from '../../../styles/Header.module.css';
import NavItem from './NavItem';
import logoImage from './logo.png';

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
  const navigate = useNavigate();  // React Router's hook to navigate

  const handleLogoClick = () => {
    navigate('/');  // Navigates to the homepage on logo click
  };

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
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}  // Makes the logo clickable
      >
        <img 
          src={logoImage}  // Use the imported logo image
          alt="PowerTools Logo" 
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
