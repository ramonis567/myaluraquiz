import react from 'react';
import styled from 'styled-components';
import Widget from '../Widget';

const FormContainer = styled.form`
  display: grid;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: 0px;
  margin-top: 5px;
  transition: opacity 1s;
  border-radius: 5px;

  &:hover {
    opacity: 0.5;
  }
`;

export default function QuestionWidget({questionI, question, totalQuestions, onSubmit}){
  return (
    <Widget>
      <Widget.Header>
        <h2>
          Pergunta {questionI + 1} de {totalQuestions}
        </h2>
      </Widget.Header>

      <img 
        alt="Question Image"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />

      <Widget.Content>
        <h3>
          {question.title}
        </h3>
        <p>
          {question.description}
        </p>
        <FormContainer onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}>
          {question.alternatives.map((alt) => {
            return (
              <Widget.Topic
                as="label"
              >
                <input 
                  // {style={{
                  //   display: "none",
                  // }}}
                  type="radio"
                  name={`question__${questionI}`}
                />
                {alt}
              </Widget.Topic>
            );
          })}
          <Button type="submit">
            Confirmar
          </Button>
        </FormContainer>
          
      </Widget.Content>
      
    </Widget>
  );
}