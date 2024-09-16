import React from 'react';
import styles from '../../styles/Automation.module.css';
import GuideItem from './AutomationItem'; // Correct import path

const GuideSection = () => {
  const guideItems = [
    {
      title: "When column changes, copy this change to the Subitems’ Column to the same value.",
      description: `
    Feature Mechanics:
    🔄 Automatic Updates
    When the main column value changes, all subitems' columns will instantly update to reflect the same value.
    🔗 Supported Trigger Columns
    You can choose any supported column type in Monday.com as the trigger.
    📝 Matching Column Types
    The subitems' columns must be of the same type as the main column to ensure proper synchronization.
    
    🚫 Limitations:
    Unsupported Column Types:
    1. Doc-type Columns:
       - Monday Docs
       - Meeting Notes
       - Creative Briefs
    2. Dependency Columns:
       - Dependency
    3. Dropdown Columns:
       - Dropdown selections
  `,
      iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
    },
    {
      title: "When the column changes, automatically assign the person who made the change.",
      description: `
                    Feature Mechanics:
✨ Automatic Assignment
·	Unassigned Person: If no one is assigned and the trigger column updates, the automation instantly assigns the person who made the change
·	Assigned Person: If a person is already assigned, the automation will switch the assignment to the person who made the change.
👤 People Column
The "Person" column must be of the People type.
🔄 Column Flexibility
The trigger column can be any type in Monday.com.
`,
      iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
    },
    {
      title: "When the column changes, add the person who made the change to the People column.",
      description: `
                    Feature Mechanics:
✨ Smart Assignment
·	Unassigned: If no one is assigned and the trigger column updates, the automation instantly assigns the person who made the change.
·	Assigned: If someone is already assigned, the automation adds the person who made the change to the existing list of assignees.
👤 People Column
The column must be of the People type.
🔄 Column Flexibility
The trigger column can be any type in Monday.com.
 
`,
      iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
    },
    {
      title: "When status changes, update the start date and end date based on the timeline.",
      description: `
                  Feature Mechanics:
🔲 Status Column
The column must be of the ‘Status’ type.
📅 Date Columns
Both Start Date and End Date must be of the ‘Date’ type.
⏳ Timeline Column
The Timeline must be of the ‘Timeline’ type.
`,
      iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
    },
    {
      title: "When status changes, update the timeline based on the start and end dates.",
      description: `
                   Feature Mechanics:
🔲 Status Column
Ensure the column is set to the ‘Status’ type.
📅 Date Columns
Start Date and End Date should both be of the ‘Date’ type.
⏳ Timeline Column
The column must be of the ‘Timeline’ type.
`,
      iconSrc: "https://cdn-icons-png.flaticon.com/512/60/60995.png",
    },
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
          />
        ))}
      </div>
    </section>
  );
};

export default GuideSection;
