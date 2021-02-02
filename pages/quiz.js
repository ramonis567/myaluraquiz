import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import QuizContainer from '../src/components/QuizContainer'

const FormContainer = styled.form`
  display: grid;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.contrastText};
  margin-top: 10px;
  outline: 0;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: 0px;
  margin-top: 5px;
  transition: opacity 1s;

  &:hover {
    opacity: 0.5;
  }
`;

export default function QuizPage() {
  const router = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              Pergunta {`${db.questions[0].id + 1}`} de {`${db.questions.length}`}
            </h1>
          </Widget.Header>

          <img 
            alt="Question Image"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
            }}
            src="https://placehold.it/400x400"
          />

          <Widget.Content>
            <h3>
              {db.questions[0].title}
            </h3>
            <p>
              {db.questions[0].description}
            </p>
          
          </Widget.Content>
         </Widget>

         <Footer />
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ramonis567/myaluraquiz"/>
    </QuizBackground>
  );
}
