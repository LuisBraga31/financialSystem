import React, { useState } from 'react'
import styles from './Form.module.css';

const Form = () => {

  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(false);

  const salvar = () => {
    
    if(!desc || !valor) {
      alert("Informe a descrição e o valor!");
      return;
    } else if(valor < 1) {
      alert("Informe uma entrada positiva");
      return;
    } 
  };

  return (
    <form className={styles.form}>
            <div className={styles.form_item}>
                <label> Descrição </label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>

            <div className={styles.form_item}>
                <label> Valor </label>
                <input type="number" value={valor} onChange={(e) => setValor(e.target.value)}/>
            </div>
            
            <div className={styles.form_radio}>
                <input type="radio" name="webmaster" value="entrada" onChange={() => setTipo(!tipo)}/> 
                <label> Entrada </label>
                <input type="radio" name="webmaster" value="saida" onChange={() => setTipo(!tipo)}/> 
                <label> Saída </label>    
            </div>

            
            <button className={styles.form_button}> Adicionar </button>
        
    </form>
  )
}

export default Form