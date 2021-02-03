import React from 'react';
import Widget from '../Widget';

export default function Finished() {
  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>
      <Widget.Content>
        [Acertou e Errou]
      </Widget.Content>
    </Widget>
  )
}
