import { delBasePath } from "next/dist/next-server/lib/router/router";
import React from "react";
import { ThemeProvider } from "styled-components";
import QuizScreen from "../../src/screens/Quiz";

export default function QuizDaGaleraPage(props) {
  return (
    <ThemeProvider theme={props.externalDb.theme}>
      <QuizScreen 
        externalQuestions={props.externalDb.questions}
        externalBackground={props.externalDb.bg}
      />
    </ThemeProvider>
      
      /*<pre style={{color:"black"}}>
        {JSON.stringify(props.externalDb.questions, null, 4)}
      </pre> */
    
  )
}

export async function getServerSideProps(context) {
  const [projectName, userGithub] = context.query.id.split("___");
  const externalDb = await fetch(`https://${projectName}.${userGithub}.vercel.app/api/db`)
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

  return {
    props: { externalDb },
  }
}