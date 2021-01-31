import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

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

              <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                router.push(`/quiz?nickname=${name}`);
                console.log(event);
              }}>
                <input 
                  placeholder="Digite o seu nome" 
                  onChange={(event) => {
                    console.log(event.target.value);
                    setName(event.target.value);
                  }}
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar {name}
                </button>
              </form>
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