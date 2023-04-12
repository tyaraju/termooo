import React, {Fragment, useState } from 'react';
import Celula from './celula';

const Line = (props) => {
  //let numColunms = props.numColunms;
  //const numColunms = useState(props.numColunms)
  //const arrColunms = new Array(numColunms).fill(2);
  const [arrColunms, setArrColunms] = useState(["","","","",""]);

  const createColunms = arrColunms.map( (column,index)=>  
    <Celula 
      idCel={`cel${index}`}
      classCel={(index === 0 && props.firstLine === 0) ? 'letter empty edit' : 'letter empty'}
      key={column}
    />
  
  )
  return (
    <Fragment>
      <div id={`line${props.idLine}`} className={`d-flex flex-row ${props.firstClassLine}`} bla={props.num}>
        {createColunms}
      </div>
    </Fragment>
  )
}

export default Line;