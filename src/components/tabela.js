import React, {Fragment} from 'react';
import Lines from './lines';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tabela = (props) => {
  let numTables = parseInt(props.numTables);
  
  const arrTables = Array.from({length:numTables})
    
  let setTables =  arrTables.map((element,index) => 
    <Col xs={(numTables >= 2) ? 6 : 12} md={6} key={index}>
      <Lines 
        numLines={props.numLines}
        numColunms={props.numColunms}
        idTable={index}
        fillCels={props.fillCels}
        letterKey={props.letterKey}
        indice={props.indice}
      />
    </Col>
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