import React from 'react'
import styles from './Grid.module.css';
import GridItem from './GridItem';

const Grid = ({itens, setItens}) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((operation) => operation.id !== ID);
        setItens(newArray);
        localStorage.setItem("operations", JSON.stringify(newArray));
    };

  return (
    <table className={styles.tabela}>
        <thead>
            <tr className={styles.head}>
                <th className={styles.th40}> Descrição </th>
                <th className={styles.th40}> Valor </th>
                <th className={styles.th10}> Tipo </th>
                <th className={styles.th10}> </th>
            </tr>
        </thead>
        <tbody>
            {itens?.map((item, index) => (
                <GridItem key={index} item={item} onDelete={onDelete}/>
            ))}
        </tbody>


    </table>
  )
}

export default Grid