import React from 'react'
import InfoItem from './InfoItem'
import styles from './Info.module.css';
import { faCircleDollarToSlot, faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';

const Info = ({entrada, saida, total}) => {
  return (
    <section className={styles.section_info}> 
    
        <InfoItem title="Entradas" value = {entrada} icon ={faCircleUp}/>
        <InfoItem title="Saídas" value ={saida} icon={faCircleDown} />
        <InfoItem title="Total" value ={total} icon={faCircleDollarToSlot}/>
    </section>
  )
 }

export default Info 