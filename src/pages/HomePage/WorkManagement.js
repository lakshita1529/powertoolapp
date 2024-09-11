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
                title="Project Management"
                description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
              />
              <Button
                text="Get Started"
                iconSrc="https://cdn.leonardo.ai/users/ab780f8f-c0b7-46d9-9ee9-f4d1f993f516/generations/fd0beb46-ea4c-4dbf-8d12-4b92a2130fe3/Leonardo_Diffusion_XL_A_modern_work_management_dashboard_inter_0.jpg"
                href="/documentation" // Link to the documentation
              />
            </div>
            <div className={styles.imageContainer} aria-hidden="true" />
          </div>
          <div className={styles.content2}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5800df9b86245ab96af6d047a2509eb2337433dc7c4a079077aac3da098b54?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188"
              alt="Work management illustration"
              className={styles.contentImage}
            />
            <div className={styles.headline}>
              <div className={styles.textBlock2}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/57b9efd64f490bc28b08aeb191b2cd4d1faf9646846ee35be2c7c8a1dd16ec0b?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188"
                  alt=""
                  className={styles.decorativeImage}
                  aria-hidden="true"
                />
                <TextBlock
                  title="Work together"
                  description="With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
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
