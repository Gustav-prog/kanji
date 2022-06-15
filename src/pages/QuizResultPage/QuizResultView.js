import React from 'react';
import TopNavBar from "../../components/TopNavbar";
import QuizResult from "./QuizResult"; 
import './QuizResultView.css' 
	
export default function QuizResultView({score, setScore, setRedo}) { 



return (
        <div className='viewBox'>
            <TopNavBar />

            <div className='Quiz'>
		        <QuizResult score={score} setScore={setScore} setRedo={setRedo} />
            </div>

        </div>
	);
}