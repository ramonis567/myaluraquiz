import React from 'react';
import Widget from '../Widget';
import { useRouter } from 'next/router';

export default function Finished({ results, totalQuestions, correctCounter }) {
  const { query } = useRouter();

  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados:</h1>
      </Widget.Header>
      <Widget.Content>
        <h3>Jogador(a): {query.nickname}</h3>
        <hr />
        {results.map((result, index) => {
          const textResult =  `Questão ${index + 1}: `;
          if(result){
            return <p>{textResult}CORRETO</p>
          }else {
            return <p>{textResult}INCORRETO</p>
          }
        })}
        <hr />
        <h2>Desempenho: {correctCounter}/{totalQuestions} acertos</h2>        
      </Widget.Content>
    </Widget>
  )
}
