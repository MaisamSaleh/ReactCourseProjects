import { useEffect, useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from '../questions.js';

export default function Question({ questionIndex, onSelectAnswer, onSkipAnswer }){
    const [timer, setTimer] = useState(10000);
    const [ answer, setAnswer ] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

        useEffect(() => {
            if (answer.selectedAnswer === '') {
                setTimer(10000); 
            } else if (answer.selectedAnswer && answer.isCorrect === null) {
                setTimer(1000); 
            } else if (answer.isCorrect !== null) {
                setTimer(2000); 
            }
        }, [answer]);

    function handleSelectAnswer(answer){
        console.log(`timer: ${timer}`);
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect != null){
        answerState = answer.isCorrect? 'correct' : 'wrong';
    }
    
    return(
        <div id="question">
            <QuestionTimer 
                key={questionIndex + '-' + answerState}
                timeOut={10000} 
                onTimeOut={() => {
                    if (!answer.selectedAnswer) {
                        onSkipAnswer();
                    }
                }}
                mode={answerState}
            />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers 
                answers={QUESTIONS[questionIndex].answers} 
                selectedAnswer={answer.selectedAnswer} 
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}