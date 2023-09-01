import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Info from './components/Infos/Info';

function App() {

  const data = localStorage.getItem("operatios");
  const [operationList, setOperationList] = useState(data ? JSON.parse(data) : []);

  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect( () => {

    const somaSaida = operationList
      .filter((item) => item.saida)
      .map((operation) => Number(operation.soma));

    const somaEntrada = operationList
      .filter((item) => !item.saida)
      .map((operation) => Number(operation.soma));

    const saida = somaSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const entrada = somaEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = (entrada - saida).toFixed(2);

    setEntrada(entrada);
    setSaida(saida);
    setTotal(total);

  }, [operationList])

  return (
    <>
      <Header/>
      <Info/>
      <Form/>
    </>
  )
}

export default App
