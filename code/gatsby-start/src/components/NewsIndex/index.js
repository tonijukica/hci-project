import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
 export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, slug, permalink } = post.node.frontmatter;
    return (
      <Link to={`news/${slug}`}>
      <section key={id} className={styles.Post}>
        <LazyLoadImage src={permalink} alt='' className={styles.newsThumb}  />
        <div className={styles.newsContainer}>
          <h2 className={styles.Title}>
            {title}
          </h2>
          <p className={styles.Excerpt}>{excerpt}</p>
        </div>
      </section>
      </Link>
    );
  });
  return postsList;
};