import React from 'react';
import Widget from '../Widget';

export default function Finished({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados:</h1>
      </Widget.Header>
      <Widget.Content>
        <p>{results.filter((x) => x).length}</p>
        <p>{results}</p>
        {/* {{db.questions.forEach((i) => {
          const questionName =  `Questão ${i + 1}: `;
          if(results[i]){
            return <p>{questionName}CORRETO</p>
          }else {
            return <p>{questionName}INCORRETO</p>
          }
        })}} */}
      </Widget.Content>
    </Widget>
  )
}
