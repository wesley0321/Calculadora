
import { useState } from "react";
import styled from "styled-components"


export default function App() {
  
  const [primeiroValor, setPrimeroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
 
  
  const [resultado, setResultado] = useState();

  const capturarPrimeiroValor = (e) => {
    setPrimeroValor(Number(e.target.value));
  };

  const capturarSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };
  
  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtrair = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicar = () => {
    setResultado (primeiroValor * segundoValor)
  }
  const divisao = () => {
    setResultado (primeiroValor / segundoValor)
  }

  const Botao = styled.button`
  background-color: #000000;
  width: 10vw;
  height: 8vh;
  border-radius: 3%;
  color: silver;
  margin: 5px;
  font-size: 25px;

  `

  const Fundo = styled.section`

  background-color: #ffb007;
  width: 59vw;
  height: 50vh;

  
  `

  const Resultado = styled.h2`
  font-size: 50px;
  color: white;
  text-align: center;
  
  `


  return (

   

    <Fundo>
      <h1>Calculadora </h1>
    
      <input onChange={capturarPrimeiroValor} />
      <input onChange={capturarSegundoValor} />

      <Resultado> {resultado}</Resultado>

      <div>
         <Botao onClick={Soma}>+</Botao>

          <Botao onClick={subtrair}>-</Botao>

         <Botao onClick={multiplicar}>x</Botao>

         <Botao onClick={divisao}>/</Botao>
      </div>
    
    </Fundo>
  );
}