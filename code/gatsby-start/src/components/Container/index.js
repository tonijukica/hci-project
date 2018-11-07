import React from "react";
 import cn from "classnames";
 import styles from "./styles.module.css";

 export default ({ className, children }) => (
     <div className={cn(className, styles.Container)}>
         {children}
     </div>
 );