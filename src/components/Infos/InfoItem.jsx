import React from 'react'
import styles from './InfoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoItem = ({title, value, icon}) => {
  return (
    <div className={styles.itemCard}>
        <div className={styles.itemHeader}>
            <h4> {title} </h4>
            <span> <FontAwesomeIcon icon={icon} /> </span> 
        </div>
        
        <div className={styles.itemFooter}>
            <span className={value.includes('-') ? styles.red : ""}> {value} </span>
        </div>
    </div>
  )
}

export default InfoItem