import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';



export const UseKanjiList = async () => {

    let [jlptLevel, setJlptLevel] = useState(5);
    let [kanjiList, setKanjiList] = useState([]);
    //const navigate = useNavigate();
    console.log("this is insie use kanjilist")

            let response = await fetch("http://localhost:8080/api/jlpt/5/kanji/random", {
                method: 'GET',
                headers : {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            if (response.status !== 200) {
                alert('something went wrong!')
                //navigate('/');
              }

            const data = await response.json();
            console.log(data);
            setKanjiList(data);
    

       console.log(kanjiList);
       return {kanjiList};     
}

export const countKanji = (array) => {
    return array.length;
}