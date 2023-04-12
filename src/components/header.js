import React, {Fragment } from 'react';

const Header = () => {
  /*const [planets, setPlanets] = useState([ ]);

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
  return (
    <Fragment>
      <div id="header" className='header row align-items-start'>
        <div className='menu'>TERMO</div>
      </div>
    </Fragment>
  )
}

export default Header;