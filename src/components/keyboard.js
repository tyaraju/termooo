import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Keyboard = (props) => {
  const arrKeyboardLetters = [
    {level: 1, keyboardLetters: ['q','w','e','r','t','y','u','i','o','p']},
    {level: 2, keyboardLetters: ['a','s','d','f','g','h','j','k','l','<-']},
    {level: 3, keyboardLetters: ['z','x','c','v','b','n','m','ENTER']}
  ];
  //const data = "Estes são os dados do componente filho para o componente pai."

  return (
    <Fragment>
      <div className='keyboard row align-items-end'>
        {arrKeyboardLetters.map((kb,index) => {
          return <Row className='justify-content-md-center' key={index}>
            <div key={kb.level} className={`kb${kb.level} justify-content-md-center d-flex flex-row`}>
              {kb.keyboardLetters.map((letter, index) => {
                return <Col className='col-md-auto d-flex' key={index}>
                        <button 
                          className={( letter !== '<-' && letter !== 'ENTER') ? 'btn' : ( letter === '<-') ? 'btn backspace' : 'btn enter'} 
                          key={index} 
                          onClick={(e) => props.clickLetter(e)} 
                          value={letter}
                        >{letter}
                        </button>
                      </Col>
              })}
            </div>
          </Row>
        })}
      </div>
    </Fragment>
  )
}

export default Keyboard;