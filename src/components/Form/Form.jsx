import React from 'react'
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
            <div className={styles.form_item}>
                <label> Descrição </label>
                <input type="text" />
            </div>

            <div className={styles.form_item}>
                <label> Valor </label>
                <input type="number"/>
            </div>
            
            <div className={styles.form_radio}>
                <input type="radio" name="webmaster" value="sim"/> <label> Sim </label>
                <input type="radio" name="webmaster" value="nao"/> <label> Não </label>    
            </div>

            
            <button className={styles.form_button}> Adicionar </button>
        
    </form>
  )
}

export default Form