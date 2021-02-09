import React from 'react';
import Widget from '../Widget';


export default function Finished() {
  return (
    <Widget>
      <Widget.Header>
        Resultados
      </Widget.Header>
      <Widget.Content>
        <h3>Seus resultados:</h3>
        {}
      </Widget.Content>
    </Widget>
  )
}
