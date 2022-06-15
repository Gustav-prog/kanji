import React, { useState, useEffect } from 'react';
import TopNavBar from "../../components/TopNavbar";
import Quiz from "./Quiz";
import './QuizView.css'
	
export default function QuizView({score, setScore, redo, kanjiList, setKanjiList, answerList, setAnswerList, wrongKanjis, setWrongKanjis}) { 



    let [jlptLevel, setJlptLevel] = useState(5);

    //let [numberOfKanji, setNumberOfKanji] = useState(5);		

    //useEffect(() => {

        
                const getKanji = async (numberOfKanji) => {
                
                                let response = await fetch("http://localhost:8080/api/jlpt/" + jlptLevel + "/kanji/random/" + numberOfKanji, {
                                        method: 'GET',
                                        headers : {
                                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                                        }
                                })
                                if (response.status !== 200) {
                                        alert('something went wrong!')
                                }

                                const data = await response.json();
                                setKanjiList(data);
                                setAnswerList(data);
                                
                }




return (
        <div className='viewBox'>
            <TopNavBar />

                 <div className='Quiz'>
                        <Quiz   score={score} 
                                setScore={setScore} 
                                redo={redo} 
                                kanjiList={kanjiList}
                                setKanjiList={setKanjiList} 
                                answerList={answerList}
                                wrongKanjis={wrongKanjis} 
                                setWrongKanjis={setWrongKanjis} 
                                getKanji={getKanji}
                        />
                 </div>

        </div>
	);
}