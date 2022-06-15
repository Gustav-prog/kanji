import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Quiz.css';
import { useNavigate } from "react-router-dom"; 


const Quiz = ({score, setScore, getKanji, kanjiList, setKanjiList, answerList, wrongKanjis, setWrongKanjis, redo, setNumberOfKanji}) => {

	let navigate = useNavigate();

	
	let kanjiSymbol = kanjiList.map((kanji) =>
       <div key={kanji.id} id="Kanji">
        {kanji.symbol}
  </div>
    );

	let kanjiMeaning = answerList.map((kanji) =>
	<div key={kanji.id}>
	 {kanji.meaning}
  </div>
  );
	

	let [selected, setSelected] = useState(0);



	let [showResult, setShowResult] = useState(false);
	let resultText = "";
	
	function checkIfCorrect(answer) {
	
	
		if (answer === selected) {
			setScore(score + 1)
			resultText = "Right!";
		} else {
			resultText = "Wrong!";
		}
		setShowResult(true);
		changeSymbol();
	}

	function changeSymbol() {
		
		if (selected === kanjiList.length -1) {
			setTimeout(() => navigate(`/quiz/result`), 1000);
		} else {
			
			console.log(resultText);
			if (resultText === "Wrong!") {
				console.log("added to wrong list" + selected);
				setWrongKanjis(wrongKanjis => [...wrongKanjis, kanjiList[selected]]);
			}

				setSelected(() => selected + 1);
				if (redo) {
						setSelected(wrongKanjis[0])
					}
				
				}
			
		}




  let [answerOrder, setAnswerOrder] = useState([]);
  let [userHasChosen, setUserHasChosen] = useState(false);

  function chooseNumberOfKanji(number) {
	getKanji(number);
	setUserHasChosen(true);
  }

  function generateAnswerOrder() {

	
	let counter = 0;
	let numbers = [];
	let kanjiAmount = answerList.length;
	
	while(counter < 4) {	

		if (kanjiAmount === 0) {
			kanjiAmount = 5;
		}

		let number = generateRandomInteger(kanjiAmount);
		if (!numbers.includes(number)) {
			numbers[counter] = number;
			counter++;
		}
	   }

	   if (!numbers.includes(selected)) {
		   numbers[generateRandomInteger(4)] = selected;
	   }
	   setAnswerOrder(numbers);
  }

  function generateRandomInteger(Max) {
    return Math.floor(Math.random() * Max);
}

 
  useEffect(() => {
		generateAnswerOrder();
		
		if (redo) {
		 setUserHasChosen(true);
		}
  }, [selected]);
  
  	
	return (
		<div>
		<div className="KanjiCard">
	
			<div className="Options">
			</div>
			<div className="QuestionBox">
	  			<div className="QuestionBoxBorder">  
					<div className="KanjiBox">
						{userHasChosen ? 
							<h1>{kanjiSymbol[selected]}</h1>
						: 
							<h1></h1>
						}
					</div>
					{userHasChosen ? 
  						<div className="answer">
  							<Button onClick={() => checkIfCorrect(answerOrder[0])} className="btn btn-secondary btn-lg btn-block" id="answer" >{kanjiMeaning[answerOrder[0]]}</Button>			
  							<Button onClick={() => checkIfCorrect(answerOrder[1])} className="btn btn-secondary btn-lg btn-block" id="answer" >{kanjiMeaning[answerOrder[1]]}</Button>	
  							<Button onClick={() => checkIfCorrect(answerOrder[2])} className="btn btn-secondary btn-lg btn-block" id="answer" >{kanjiMeaning[answerOrder[2]]}</Button>	
  							<Button onClick={() => checkIfCorrect(answerOrder[3])} className="btn btn-secondary btn-lg btn-block" id="answer" >{kanjiMeaning[answerOrder[3]]}</Button>
						</div>
						:
						<div className="arrow">
							<h4><b>Please choose number of kanji</b></h4>
							<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" id="arrowSign">
  								<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
							</svg>
						</div>
					}
				</div> 
			</div>
			<div>
				<div className="Score">
				{userHasChosen ?
					<h5>Score : {score} / {kanjiList.length}</h5>  
					
				:
					<div>
						<p>Choose number of kanji here</p>
						<Button onClick={() => chooseNumberOfKanji(5)}>5</Button>
						<Button onClick={() => chooseNumberOfKanji(10)}>10</Button>
						<Button onClick={() => chooseNumberOfKanji(15)}>15</Button>
						<Button onClick={() => chooseNumberOfKanji(20)}>20</Button>
					</div>
				}
					
				</div>
			</div>
		</div>
					
	</div>
	);
}

export default Quiz;