import React, {Fragment } from 'react';
import Line from './line.js';

const Lines = (props) => {
  let arrLines = Array.from({length:props.numLines});//[0,1,2,3,4] Array.from({length:numTables})

  let createLines = arrLines.map((num, index) => 
    <Line 
      numColunms={props.numColunms}
      firstClassLine={(index === 0) ? 'line lineActived' : 'line'}
      idLine={`line${index}`}
      firstLine={index}
    />
  );
  
  return (
    <Fragment>
      <div id={`table${props.idTable}`} className="table d-flex flex-column">
        {createLines}
      </div>
    </Fragment>
  )
}

export default Lines;