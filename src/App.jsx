import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Info from './components/Infos/Info';

function App() {

  const data = localStorage.getItem("operations");
  const [operationList, setOperationList] = useState(data ? JSON.parse(data) : []);
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');
  const [total, setTotal] = useState('');

  useEffect( () => {
    console.log(operationList);
    
    const somaSaida = operationList
      .filter((item) => item.tipo)
      .map((operation) => Number(operation.valor));

      //console.log(somaSaida);

    const somaEntrada = operationList
      .filter((item) => !item.tipo)
      .map((operation) => Number(operation.valor));

      //console.log(somaEntrada);

    const saida = somaSaida.reduce((total, vatual) => total + vatual, 0).toFixed(2);
    const entrada = somaEntrada.reduce((total, vatual) => total + vatual, 0).toFixed(2);

    const total = (entrada - saida).toFixed(2);

    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`R$ ${total}`);

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
