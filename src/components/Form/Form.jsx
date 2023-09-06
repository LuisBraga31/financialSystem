import React, { useState } from 'react'
import styles from './Form.module.css';
import Grid from '../Grids/Grid';

const Form = ({add, operationList, setOperationList}) => {

  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(null);

  const gerarId = () => Math.round(Math.random() * 1000);

  const salvar = () => {
    
    if(!desc || !valor) {
      alert("Informe a descrição e o valor!");
      return;
    } else if(valor < 1) {
      alert("Informe uma entrada positiva");
      return;
    } else if (tipo === null) {
      alert("Seleicione o tipo da operação");
      return;
    }
    
    const operation = {
      id: gerarId(),
      desc: desc,
      valor: parseFloat(valor).toFixed(2),
      tipo: tipo 
    };

    add(operation);
    setDesc("");
    setValor("");

  };

  return (
    <>
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
                  <input type="radio" name="webmaster" value="entrada" onChange={() => setTipo(false)} /> 
                  <label> Entrada </label>
                  <input type="radio" name="webmaster" value="saida" onChange={() => setTipo(true)}/> 
                  <label> Saída </label>    
              </div>

              
              <button className={styles.form_button} onClick={salvar}> Adicionar </button>
          
      </form>

      <Grid itens={operationList} setItens={setOperationList}/>
    </>

  )
}

export default Form