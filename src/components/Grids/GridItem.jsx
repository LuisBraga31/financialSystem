import React from 'react'
import styles from './GridItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const GridItem = ( {item, onDelete}) => {
  return (
    <tr className={styles.linha}>
        <td> {item.desc} </td>
        <td> {item.valor} </td>
        <td className={styles.thcenter}> {!item.tipo ? 
            (<span className={styles.entrada}> . </span>) 
            : 
            (<span className={styles.saida}> . </span>)}</td>
        <td className={styles.thcenter}> 
            <FontAwesomeIcon className={styles.delete} icon={faTrash} onClick= {() => onDelete(item.id)} /> 
        </td>
    </tr>
  )
}

export default GridItem