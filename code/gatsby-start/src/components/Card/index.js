import React from "react";
import styles from "./styles.module.css";

export default({ children }) => (
    <div className = { styles.Card }>
            <div className = { styles.Photo }></div>
            {children}
    </div>
);