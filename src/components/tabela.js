import React, {Fragment} from 'react';
import Lines from './lines';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tabela = (props) => {
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
  
  let numTables = parseInt(props.numTables);
  //let word = props.word;
  
  const arrTables = Array.from({length:numTables})
  //const setClass = 
  
  let setTables =  arrTables.map((element,index) => 
    //(numTables === 4 && index === 1) ? `</Row><Row>` : ``

    <Col xs={(numTables >= 2) ? 6 : 12} md={6}>
      <Lines 
        numLines={props.numLines}
        numColunms={props.numColunms}
        idTable={index} 
        key={index}
      />
    </Col>

    //(numTables === 4 && index === 3) ? `</Row>` : ``;
  );

  return (
    <Fragment>
      <Row className='justify-content-md-center'>
        {setTables}
      </Row>
    </Fragment>
  )
}

export default Tabela;