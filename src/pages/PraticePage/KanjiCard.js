import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./KanjiCard.css";


const KanjiCard = () => {

  const [kanjis, setKanjis] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('http://localhost:8080/api/jlpt/5/kanji', {
        method: 'GET',
        headers : {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      if (response.status !== 200) {
        alert('something went wrong!')
        navigate('/');
      }
    const data = await response.json();
    setKanjis(data);
    }
    fetchData();
  }, []);

    
    const kanjiSymbol = kanjis.map((kanji) =>
       <div key={kanji.id} id="Kanji">
        {kanji.symbol}
  </div>
    );

    const kanjiMeaning = kanjis.map((kanji) =>
    <div key={kanji.id} id="Kanji">
     {kanji.meaning}

</div>
 );

    const kanjiSentence = kanjis.map((kanji) =>
    <div key={kanji.id} id="Kanji">
     <p>{kanji.exampleSentence}</p>
</div>
 );

 const kanjiSentanceMeaning = kanjis.map((kanji) =>
 <div key={kanji.id} id="Kanji">
 <p>{kanji.exampleSentenceTranslation}</p>
</div>
);

  const kanjiReading = kanjis.map((kanji) => 
    <div key={kanji.id} id="Kanji">
      {kanji.readingOn}
      {kanji.readingKun}
      
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
        <div className="KanjiCard">
          <Container>
  <Row className="justify-content-center">
		<Card style={{ width: '30rem', height:'20rem', border:'5px solid rgba(0,0,0,.125)'}}>
  <Card.Body>
    <Card.Title>    
      {showEng
        ? <h3>{kanjiMeaning[selected]}</h3>
        : <h3>{kanjiSymbol[selected]}</h3>
      }  
      </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
    {showEng
        ? <></>
        : <h5>{kanjiReading[selected]}</h5>
      }  
    </Card.Subtitle>
    {showEng
        ? <>{kanjiSentanceMeaning[selected]}</>
        : <>{kanjiSentence[selected]}</>
      }  
  </Card.Body>
  <div className="CardButtons">
    <Button onClick={changeKanji}>Next</Button>
    <div className='divider' />  
    <Button onClick={changeLang} variant="secondary">Show translation</Button>  
    </div>
</Card>
</Row>
</Container>
        </div>
	);
}

export default KanjiCard;