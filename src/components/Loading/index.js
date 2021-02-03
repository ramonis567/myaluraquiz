import React from 'react';
import Widget from '../Widget';
import CircleLoader from 'react-spinners/CircleLoader';
import db from "../../../db.json";

export default function Loading() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <CircleLoader color={db.theme.colors.secondary} size={100}/>
      </Widget.Content>
    </Widget>


  )
}
