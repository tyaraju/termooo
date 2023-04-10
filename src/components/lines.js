import React, {Fragment } from 'react';
import Line from './line.js';

const Lines = (props) => {
  //let numLines = props.numLines;
  let arrLines = [0,1,2,3,4]//new Array(numLines).fill(1);
  
  let createLines = arrLines.map((num, index) => 
    <Line 
      numColunms={props.numColunms}
      firstClassLine={(index === 0) ? 'line lineActived' : 'line'}
      idLine={`line${index}`}
      num={num}
    />
  );
  
  return (
    <Fragment>
      <div className="table d-flex">
        {createLines}
      </div>
    </Fragment>
  )
}

export default Lines;