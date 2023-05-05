import React, {Fragment, useState } from 'react';

const Line = (props) => {
  let arrColunms = Array.from({length:props.numColunms});
  let [arrayCel,setArrayCel] = useState('')
  /*
  
  letterKey={props.letterKey}
  indice={props.indice}*/

  const createColunms = arrColunms.map( (column,index)=>  
    <div 
      id={`cel${index}`} 
      className={`d-flex p-2 ${(index === 0 && props.firstLine === 0) ? 'letter empty edit' : 'letter empty'}`}
      key={index}
    >{}</div>
  
  )
  //console.log('tyara',props.letterKey,props.indice)
  const fillCels = () => {
    
  }
  return (
    <Fragment>
      <div id={`line${props.idLine}`} className={`d-flex flex-row ${props.firstClassLine}`} bla={props.num}>
        {createColunms}
      </div>
    </Fragment>
  )
}

export default Line;