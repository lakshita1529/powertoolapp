import React from 'react';
import styles from '../../styles/WorkManagement.module.css';
import Button from '../../components/shared/Button/Button';
import TextBlock from '../../components/shared/Button/TextBlock';

const WorkManagement = () => {
  return (
    <section className={styles.container}>
      <div className={styles.workManagement}>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.headline}>
              <TextBlock
                title="Workspace Management"
                description="Power up your productivity with our automation app that simplifies tasks and boosts efficiency ⚡💼 – ready to take your workflow to the next level? 💡 Try it now!"
              />
              <Button
                text="Get Started"
                href="/documentation" // Link to the documentation
              />
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.headline}>
              <div className={styles.textBlock2}>
                <TextBlock
                  title="Let's Connect together"
                  description="Teamwork makes the dream work! 🤝✨ Join forces and achieve more together – who’s ready to collaborate? 💬"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkManagement;
