import React, {Fragment, useState, useEffect } from 'react';
import Header from './header.js';
import Tabela from './tabela.js';
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
  
      
  return (
    <Fragment>
      <Header />
      
      <hr />
      <div id={`line`}>
        <Tabela 
          numTables= {1}
          numLines= {5}
          numColunms= {6}
          word= {'porta'}
        />
      </div>
    </Fragment>
  )

  
  
      
}

export default Termo;