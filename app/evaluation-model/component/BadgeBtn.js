import React from "react";
// import styles from "../../../public/assets/css/models.module.scss";
import styles from "../../../public/assets/css/components.module.scss";

const BadgeButton = ({ title }) => {
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.badge}>
        <span className={styles.badgeText}>{title}</span>
      </div>
    </div>
  );
};

export default BadgeButton;
