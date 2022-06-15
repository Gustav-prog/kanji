import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState } from "react";
import { Routes, Route } from "react-router-dom";
import QuizView from "./pages/QuizPage/QuizView"
import LoginView from './pages/LoginPage/LoginView';
import PracticeView from './pages/PraticePage/PracticeView';
import QuizResultView from './pages/QuizResultPage/QuizResultView';
import RegisterForm from './pages/RegisterPage/RegisterForm';

export default function App() {

  let [score, setScore] = useState(0);
  let [redo, setRedo] = useState(false);
  let [kanjiList, setKanjiList] = useState([]);
  let [answerList, setAnswerList] = useState([]);
  let [wrongKanjis, setWrongKanjis] = useState([]);
  
  return (

      <Routes>                   
            <Route path="/quiz" element={
              <QuizView 
                score={score}  
                setScore={setScore} 
                redo={redo} 
                kanjiList={kanjiList}
                setKanjiList={setKanjiList}
                answerList={answerList}
                setAnswerList={setAnswerList}
                wrongKanjis={wrongKanjis} 
                setWrongKanjis={setWrongKanjis} />}/>
            <Route path="/quiz/result" element={
            <QuizResultView score={score} setScore={setScore} setRedo={setRedo} />} />
            <Route path="/practice" element={<PracticeView /> }/> 
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<LoginView /> }/>   
      </Routes>      

  );
}


