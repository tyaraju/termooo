import React, {Fragment, useState } from 'react';
import Header from './header.js';
import Tabela from './tabela.js';
import Keyboard from './keyboard.js';
import Container from 'react-bootstrap/Container';
//import Celula from './celula.js';
/*
async function getPlanets(){
  let response = await fetch('/api/planets.json',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  let data = await response.json()
  return data;
}
*/
const Termo = () => {
  
/*
  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets']);
    })
  },[])
  const removeLast = () => {
    let new_planets = [...planets]
    new_planets.pop()
    setPlanets(new_planets)
  }
  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.length - 1]
    setPlanets([...planets, last_planet])
  }
  <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLastPlanet}>Duplicate Last</button>
  */
  //const [planets, setPlanets] = useState([ ]);
  const [letterKey,setActualLetter] = useState('')
  //let arrayWord = useState([])
  let [indice, setIndice] = useState(0);

  
  const clickLetter = (e) => {
    const letter = e.target.value;
    if (letter !== '<-' && letter !== 'ENTER') { //? 'btn' : ( letter === '<-') ? 'btn backspace' : 'btn enter'} 
      if(indice<5){
        //let new_word = [...letterKey]
        //let letter = e.target.value;
        setActualLetter([...letterKey,e.target.value])
        setIndice(parseInt(indice+1))
      }
    }
    console.log(indice,letterKey)
    //console.log(indice,setActualLetter)
  }
  //word= {'porta'}  
  return (
    <Fragment>
      <Container>
        <Header/>
        <Tabela
          numTables= {2}
          numLines= {6}
          numColunms= {5}
          letterKey={letterKey}
          indice={indice}
        />
        <Keyboard clickLetter={clickLetter}/>
      </Container>
    </Fragment>
  )
}

export default Termo;