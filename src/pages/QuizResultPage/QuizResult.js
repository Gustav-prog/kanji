import React  from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './QuizResult.css';

export default function QuizResult({score, setScore, setRedo}) {

	const navigate = useNavigate();

	function redoFailedQuestions() {
		setRedo(true);
		setScore(0);
		navigate("/quiz");
	}

	function startOver() {
		setScore(0);
		navigate("/quiz");
	}
  
  	
	return (
		<div>
		<div className="KanjiCard">
		<div className="LeftFrame">
			</div>
			<div className="QuestionBox">
	  			<div className="QuestionBoxBorder">  
					<div className="KanjiBox">
						<h1>Result</h1>
						<p>You scored {score} points!</p>
						<div className="buttons">
						<Button onClick={startOver} id="buttons">Start over</Button>
						<div className="divider" />
						<Button onClick={redoFailedQuestions} className="btn btn-secondary" id="buttons" >Retry failed questions</Button>
						</div>
					</div>
  						
				</div> 
			</div>
			<div>
			<div className="RightFrame">
				
				</div>
			</div>
		</div>
					
	</div>
	);
}