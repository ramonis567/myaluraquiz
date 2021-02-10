import React from 'react';
import Widget from '../Widget';

export default function Finished({ results, totalQuestions, correctCounter }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados:</h1>
      </Widget.Header>
      <Widget.Content>
        {results.map((result, index) => {
          const textResult =  `Questão ${index + 1}: `;
          if(result){
            return <p>{textResult}CORRETO</p>
          }else {
            return <p>{textResult}INCORRETO</p>
          }
        })}
        <h4>Acertos: {correctCounter}/{totalQuestions}</h4>

      </Widget.Content>
    </Widget>
  )
}
