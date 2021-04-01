import React from 'react';
import GitHubCorner from '../../components/GithubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import Footer from '../../components/Footer';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from '../../components/QuestionWidget';
import Finished from '../../components/Finished';
import Loading from '../../components/Loading';

const screenStates = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FINISHED: 'finished'
}

export default function QuizPage({ externalQuestions, externalBackground }) {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = externalQuestions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionI = currentQuestion;
    const question = externalQuestions[questionI];
    const [results, setResults] = React.useState([]);
    const [correctCounter, setCorrectCounter] = React.useState(0);
  
    React.useEffect(() => {
      setTimeout(() => {
        setScreenState(screenStates.LOADED);
      }, 2*1000);
      //Component.didMount -> React Lifecycle
    }, []);
  
    function handleSubmit(){
      if(questionI + 1 < totalQuestions){
        setCurrentQuestion(questionI + 1);
      }else {
        setScreenState(screenStates.FINISHED);
      }
    }
  
    const isQuestionCorrect = (isCorrect) => {
      results.push(isCorrect);
      //Reduce? 
      if(isCorrect === true){
        setCorrectCounter(1 + correctCounter); 
      }
    }
    
    return (
      <QuizBackground backgroundImage={externalBackground}>
        <QuizContainer>
  
          <QuizLogo />
  
          {screenState === screenStates.LOADING && <Loading />}
  
          {screenState === screenStates.LOADED && <QuestionWidget
            questionI={questionI}
            question={question}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
            questionCorrect={isQuestionCorrect}
          />}
  
          {screenState === screenStates.FINISHED && <Finished results={results} totalQuestions={totalQuestions} correctCounter={correctCounter}/>}
  
          <Footer />
  
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/ramonis567/myaluraquiz"/>
      </QuizBackground>
    );
  }
  