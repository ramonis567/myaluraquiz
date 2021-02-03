import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';
import Finished from '../src/components/Finished';
import Loading from '../src/components/Loading';

const screenStates = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FINISHED: 'finished'
}

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionI = currentQuestion;
  const question = db.questions[questionI];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.LOADED);
    }, 2*1000);
    //Component.didMount
  }, []);

  function handleSubmit(){
    if(questionI + 1 < totalQuestions){
      setCurrentQuestion(questionI + 1);
    }else {
      setScreenState(screenStates.FINISHED);
    }
  }
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <QuizLogo />

        {screenState === screenStates.LOADING && <Loading />}

        {screenState === screenStates.LOADED && <QuestionWidget
          questionI={questionI}
          question={question}
          totalQuestions={totalQuestions}
          onSubmit={handleSubmit}
        />}

        {screenState === screenStates.FINISHED && <Finished />}

        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ramonis567/myaluraquiz"/>
    </QuizBackground>
  );
}
