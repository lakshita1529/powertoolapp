import React from 'react';
import styles from '../../../styles/Footer.module.css';
import InfoSection from './InfoSection';
import TryButton from './TryButton';
import BottomSection from './BottomSection';

const Footer = () => {
  const infoSections = [
    {
      title: 'Product',
      items: ['Overview', 'Pricing', 'Customer stories']
    },
    {
      title: 'Resources',
      items: ['Blog', 'Guides & tutorials', 'Help center']
    },
    {
      title: 'Company',
      items: ['About us', 'Careers', 'Media kit']
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.logoDescription}>
            <div className={styles.logo}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90817ac450ed472ad65639cb8cdd3b6ed3a2c26f3d58d87911c022496a3a9cc0?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" className={styles.logoImage} alt="Whitepace logo" />
              <div className={styles.logoText}>PowerTools</div>
            </div>
            <p className={styles.description}>
              Powertools was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>
          {infoSections.map((section, index) => (
            <InfoSection key={index} title={section.title} items={section.items} />
          ))}
          <TryButton />
        </div>
        <BottomSection />
        <div className={styles.divider} />
      </div>
    </footer>
  );
};

export default Footer;