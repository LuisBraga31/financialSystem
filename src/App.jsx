import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Info from './components/Infos/Info';

function App() {

  const data = localStorage.getItem("operations");
  const [operationList, setOperationList] = useState(data ? JSON.parse(data) : []);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect( () => {

    const somaSaida = operationList
      .filter((item) => item.tipo)
      .map((operation) => Number(operation.valor));

    const somaEntrada = operationList
      .filter((item) => !item.tipo)
      .map((operation) => Number(operation.valor));

    const saida = somaSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const entrada = somaEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(entrada - saida).toFixed(2);

    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`${Number(entrada) < Number(saida) ? "-" : ""}R$ ${total}`);

  }, [operationList]);

  const add = (operation) => {

    const operationsArray = [...operationList, operation];
    setOperationList(operationList);

    localStorage.setItem("operations", JSON.stringify(operationsArray));

  }

  return (
    <>
      <Header/>
      <Info entrada={entrada} saida ={saida} total={total} />
      <Form add={add} operationList={operationList} setOperationList={setOperationList}/>
    </>
  )
}

export default App
