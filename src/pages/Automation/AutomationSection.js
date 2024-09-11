import React from 'react';
import styles from '../../styles/Automation.module.css';
import GuideItem from './AutomationItem'; // Correct import path

const GuideSection = () => {
  const guideItems = [
    {
      title: "Automation 1",
      description: "When column changes, copy this change to the Subitems’ Column to the same value",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
    },
    {
        title: "Automation 2",
        description: "When Column changes, assign (replace) Person who made the change",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
        
      },
      {
        title: "Automation 3",
        description: "When Column changes, add the person who made the change to the People column ",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
        
      },
      {
        title: "Automation 4",
        description: "When status changes to something, update start date and end date based on timeline. ",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
        
      },
      {
        title: "Automation 5",
        description: " When status changes to something update timeline based on start date and end date ",
        iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
        
      }
    // Add more items as needed
  ];

  return (
    <section className={styles.guideSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Automations</h2>
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
