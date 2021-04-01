import styled from 'styled-components';
import Widget from '../Widget';
import AlternativeForm from '../AlternativeForm';
import BackLinkArrow from '../BackLinkArrow'

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

export default function QuestionWidget({
    questionI, 
    question, 
    totalQuestions, 
    onSubmit, 
    questionCorrect
  }){
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [formSubmited, setFormSubmited] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer; //boolean
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h2 style={{ marginLeft: "10px" }}>
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
        <AlternativeForm onSubmit={(event) => {
          event.preventDefault();
          questionCorrect(isCorrect);
          setFormSubmited(true);
          setTimeout(() => {
            setSelectedAlternative(undefined);
            setFormSubmited(false);
            onSubmit();
          }, 2*1000);
        }}>
          {question.alternatives.map((alt, altIndex) => {
            const alternativeId = `alternative__${altIndex}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative === altIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                data-selected={isSelected}
                data-status={formSubmited && alternativeStatus}
              >
                <input 
                  style={{
                    display: "none",
                  }}
                  key={''}
                  type="radio"
                  name={`question__${questionI}`}
                  onChange={() => {
                    setSelectedAlternative(altIndex);
                  }}
                />
                {alt}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {formSubmited &&  
            <>
              {isCorrect && <p>Você acertou! :)</p>}
              {!isCorrect && <p>Você errou! :(</p>}
            </>
          }
          
        </AlternativeForm>
        
      </Widget.Content>
      
    </Widget>
  );
}