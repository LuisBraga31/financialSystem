import React from 'react'
import InfoItem from './InfoItem'
import styles from './Info.module.css';

const Info = () => {
  return (
    <section className={styles.section_info}> 
    
        <InfoItem title="Entradas" />
        <InfoItem title="Saídas"/>
        <InfoItem title="Total"/>
    
    </section>
  )
 }

export default Info 