import React from 'react';
import styles from '../../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Get More Done with Power Tools</h1>  
          <p className={styles.description}>
            Workspace management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
        </div>
        {/* <button className={styles.ctaButton}>
          <span className={styles.buttonText}>Get Started with Powertools</span>
         <img
            src="https://cdn.leonardo.ai/users/ab780f8f-c0b7-46d9-9ee9-f4d1f993f516/generations/fd0beb46-ea4c-4dbf-8d12-4b92a2130fe3/Leonardo_Diffusion_XL_A_modern_work_management_dashboard_inter_0.jpg"
            alt="Modern work management dashboard"
            className={styles.buttonIcon}
            aria-hidden="true"
          />
        </button> */}
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://cdn.leonardo.ai/users/ab780f8f-c0b7-46d9-9ee9-f4d1f993f516/generations/fd0beb46-ea4c-4dbf-8d12-4b92a2130fe3/Leonardo_Diffusion_XL_A_modern_work_management_dashboard_inter_0.jpg"
          alt="Whitepace project management interface"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
