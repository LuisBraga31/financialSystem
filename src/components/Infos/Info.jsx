import React from 'react'
import InfoItem from './InfoItem'
import styles from './Info.module.css';

const Info = ({entrada, saida, total}) => {
  return (
    <section className={styles.section_info}> 
    
        <InfoItem title="Entradas" value = {entrada} />
        <InfoItem title="Saídas" value ={saida} />
        <InfoItem title="Total" value ={total}/>
    
    </section>
  )
 }

export default Info 