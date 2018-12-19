import React from "react";
import styles from "./styles.module.css";
//test
export default({coinName, source}) => (
    <div className = { styles.Card }>
            <img className = { styles.Photo } src={source} ></img>
            <p>{coinName}</p>
    </div>
);