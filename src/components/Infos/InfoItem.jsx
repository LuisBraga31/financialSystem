import React from 'react'
import styles from './InfoItem.module.css';

const InfoItem = ({title}) => {
  return (
    <div className={styles.itemCard}>
        <div className={styles.itemHeader}>
            <h4> {title} </h4>
            <span> IC </span> 
        </div>
        
        <div className={styles.itemFooter}>
            <span> O valor em breve </span>
        </div>
    </div>
  )
}

export default InfoItem