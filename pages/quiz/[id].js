import React from "react";
import QuizScreen from "../../src/screens/Quiz";

export default function QuizDaGaleraPage(props) {
  return (
      <QuizScreen 
        externalQuestions={props.externalDb.questions}
        externalBackground={props.externalDb.bg}
      />
      /*<pre style={{color:"black"}}>
        {JSON.stringify(props.externalDb.questions, null, 4)}
      </pre> */
    
  )
}

export async function getServerSideProps(context) {
  const externalDb = await fetch("https://aluraquiz-css.omariosouto.vercel.app/api/db")
    .then((serverResponse) => {
      if(serverResponse.ok){
        return serverResponse.json();
      }
      throw new Error("Falha ao capturar os dados do quiz externo!");
    })
    .then((serverResponseObject) => {
      return serverResponseObject;
    })
    .catch((err) => {
      console.log(err);
    })

    console.log(externalDb);

  return {
    props: { externalDb },
  }
}