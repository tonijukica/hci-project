import React from "react";
import styles from "./styles.module.css";

export default({coinName, source}) => (
    <div className = { styles.Card }>
            <img className = { styles.Photo } src={source} alt='' />
            <p>{coinName}</p>
    </div>
);