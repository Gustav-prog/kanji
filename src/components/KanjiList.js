import React, { useState, useEffect } from 'react';
import "./KanjiList.css";
import Button from 'react-bootstrap/Button';

export default function Quiz() {


const [kanjis, setKanjis] = useState([]);

  useEffect(() => {
    async function fetchData() {
    let response = await fetch('http://localhost:8080/api/jlpt/5/kanji', {
      method: 'GET',
      headers : {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }) 
    const data = await response.json();
    setKanjis(data);
    }
    fetchData();
  }, []);
    
    const kanjiList = kanjis.map((kanji) =>
       <div key={kanji.id}>
        <h5>{kanji.symbol}</h5>
        <p>{kanji.exampleSentence}</p>
  </div>
    );

    const kanjiMeaning = kanjis.map((kanji) =>
    <div key={kanji.id}>
     <h5>{kanji.meaning}</h5>
    <p>{kanji.exampleSentenceTranslation}</p>
</div>
 );

 const [showEng, setShowEng] = useState(false);
 const changeLang = () => {
   setShowEng(prev => {
       if(prev === false) {
           return true
       } else {
           return false;
       }
   });
 };

 const [selected, setSelected] = useState(0);
 const changeKanji = () => {
    setSelected(prev => {
      if (prev === kanjis.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
    setShowEng(false);
  };


    return (
        <div>
        {showEng
        ? <div>{kanjiMeaning[selected]}</div>
        : <div>{kanjiList[selected]}</div>
      }  
      <div>
      <Button onClick={changeKanji}>Next</Button>  
      <Button onClick={changeLang} variant="secondary">Show translation</Button>    
      </div>
      </div>
    );
  }