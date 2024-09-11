import React from 'react';
import styles from '../../../styles/Footer.module.css';

const BottomSection = () => {
  return (
    <div className={styles.bottomSection}>
      <div className={styles.termsAndCondition}>
        <div className={styles.language}>
          <div className={styles.languageIcon}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc0aa464bbb46d633dfdaf5ce3fe63a7d95b4c2e6114d6af4c8fd52d94be14d9?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" className={styles.languageImage} alt="Language icon" />
          </div>
          <span className={styles.languageText}>English</span>
          <div className={styles.arrow}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d730cf04882959b0515956c460f57095b392f7d1f5b511f08fc157d28a377ba1?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" className={styles.arrowImage} alt="" />
          </div>
        </div>
        <a href="#" className={styles.legalLink}>Terms & privacy</a>
        <a href="#" className={styles.legalLink}>Security</a>
        <span className={styles.copyright}>©2024 PowerTool LLC.</span>
      </div>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.socialLink}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af4389468f401e3541a973fffa620a3e194aa162088d2d5728e75a6fb661830?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" className={styles.socialIcon} alt="Facebook" />
        </a>
        <a href="#" className={styles.socialLink}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac368d25108e8ee534fdfae682d11f64c418783e301eaf3814a8c1d54827aa9d?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" className={styles.socialIcon} alt="Twitter" />
        </a>
        <a href="#" className={styles.socialLink}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d30ede99ab36ce4924442306e36d094e36a375ef43a2a7402a7fea0dd5ea4f5d?placeholderIfAbsent=true&apiKey=0c776f1df6934508b66ea1af55500188" className={styles.socialIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default BottomSection;