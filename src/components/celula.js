import React, {Fragment, useState } from 'react';

const Celula = (props) => {
  const keyState = useState(props.key)
  return (
    <Fragment>
      <div id={props.idCel} className={`d-flex p-2 ${props.classCel}`}>{keyState}</div>
    </Fragment>
  )
}

export default Celula;