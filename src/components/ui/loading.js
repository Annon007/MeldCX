import React from "react";
import styles from "./loading.module.css";
import loading from "../../resources/loading.png"

const Loading = () => {
    return <div className={styles.loadingContainer}>
        <img src={loading} className={styles.load} alt="loading" />
    </div>
};
export default Loading;