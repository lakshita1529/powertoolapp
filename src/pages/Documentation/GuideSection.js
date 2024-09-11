import React from 'react';
import styles from '../../styles/GuideSection.module.css';
import GuideItem from './GuideItem';

const GuideSection = () => {
  const guideItems = [
    {
      title: "Getting Started",
      description: "Get started with Power Tools",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e886e809a1c4027cc35e792ce1c5495bd771f296db03ad2f19818946552a352?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188",
      path: "/getstarted", // Add path for redirection
    },
    {
      title: "Automation",
      description: "Learn the basic concepts of Power Tools",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6923df575682cf400d43c217a67421a98629a6f7fce247ecc5f89c8529554534?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188",
      path: "/automation", // Add path for redirection
    }
  ];

  return (
    <section className={styles.guideSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Guides</h2>
      </header>
      <div className={styles.guideItemsWrapper}>
        {guideItems.map((item, index) => (
          <GuideItem
            key={index}
            title={item.title}
            description={item.description}
            iconSrc={item.iconSrc}
            path={item.path} 
          />
        ))}
      </div>
    </section>
  );
};

export default GuideSection;
