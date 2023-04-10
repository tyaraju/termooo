import React, {Fragment} from 'react';
import Lines from './lines';

const Tabela = (props) => {
  
  
    //let numTables = props.numTabelas;
    let word = props.word;
    
    
    //const arrTables = new Array(numTables);
    //const [planets, setPlanets] = useState(0);
    //setPlanets([...planets, last_planet])
    
    
    
  
  //const [setTabela] = useState([ ]);


  /*useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets']);
    })
  },[])*/
  /*const removeLast = () => {
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
  return (
    <Fragment>
      <Lines 
        numLines={props.numLines}
        numColunms={props.numColunms}
        class='tabela1'
      />
    </Fragment>
  )
}

export default Tabela;