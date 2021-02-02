import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

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
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>
                {db.title}
              </h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                {db.description}
              </p>

              <FormContainer onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?nickname=${name}`);
              }}>
                <Input 
                  placeholder="Digite o seu nome" 
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <Button type="submit" disabled={name.length === 0}>
                  JOGAR {name}
                </Button>
              </FormContainer>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
            </Widget.Content>
          </Widget>
          <Footer/>
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/ramonis567/myaluraquiz"/>

      </QuizBackground>
  );
}