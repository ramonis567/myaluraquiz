import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

export const FormContainer = styled.form`
  display: grid;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.contrastText};
  margin-top: 10px;
  outline: 0;
`;

export const Button = styled.button`
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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ duration: 0, delay: 0}}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          initial="hidden"
          animate="show"
        >
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
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.5}}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          initial="hidden"
          animate="show"
        >

          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, userGithub] = linkExterno.replace(/\//g, "").replace("https:", "").replace(".vercel.app", "").split(".");
                // USO DE REGEX ^
                return <li key={linkExterno}>
                  <Widget.Topic href={`/quiz/${projectName}___${userGithub}`} as={Link}>
                    {userGithub}/{projectName}
                  </Widget.Topic>
                </li>;
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer   
          as={motion.section}
          transition={{ duration: 0.75, delay: 0.75 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/ramonis567/myaluraquiz"/>

    </QuizBackground>
  );
}