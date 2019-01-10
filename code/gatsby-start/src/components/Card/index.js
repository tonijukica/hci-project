import React from "react";
import styles from "./styles.module.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default({coinName, source}) => (
    <div className = { styles.Card }>
            <LazyLoadImage className = { styles.Photo } src={source} alt='' effect = 'blur'></LazyLoadImage>
            <p>{coinName}</p>
    </div>
);