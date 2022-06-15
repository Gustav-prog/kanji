import React, { useState, useEffect } from 'react';


const UseResult = () => {

    let [result, setResult] = useState(0);
    let [resultText, setResultText] = useState("");

    const RightAnswer = () => {
        setResult(result + 1)
		setResultText("Right!");
    };

    const WrongAnswer = () => {
        setResultText("Wrong!");
    }

    return {result, resultText, RightAnswer, WrongAnswer}
}

export default UseResult;