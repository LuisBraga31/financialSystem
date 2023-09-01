import React from 'react'
import styles from './GridItem.module.css';

const GridItem = ( {item, onDelete}) => {
  return (
    <tr className={styles.linha}>
        <td> {item.desc} </td>
        <td> {item.valor} </td>
        <td> {item.expense ? (<span> E </span>) : (<span> S </span>)}</td>
        <td> <button onClick= {() => onDelete(item.id)}> Exlucir </button></td>
    </tr>
  )
}

export default GridItem