import React, { useState, useEffect } from 'react'
import adamwest from './images/adamwest.png'
import bonnie from './images/bonnie.jpeg'
import brian from './images/brian.jpeg'
import carter from './images/carter.jpeg'
import chris from './images/chris.png'
import cleveland from './images/cleveland.jpeg'
import herbert from './images/herbert.png'
import jillian from './images/jillian.jpeg'
import joe from './images/joe.png'
import lois from './images/lois.jpeg'
import meg from './images/meg.png'
import peter from './images/peter.jpeg'
import quagmire from './images/quagmire.png'
import stewie from './images/stewie.png'
import tricia from './images/tricia.jpeg'

function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  let [arr] = useState(
    [
      { value: 'adamwest', id: 0, clicked: false, src: adamwest },
      { value: 'bonnie', id: 1, clicked: false, src: bonnie },
      { value: 'brian', id: 2, clicked: false, src: brian },
      { value: 'carter', id: 3, clicked: false, src: carter },
      { value: 'chris', id: 4, clicked: false, src: chris },
      { value: 'cleveland', id: 5, clicked: false, src: cleveland },
      { value: 'herbert', id: 6, clicked: false, src: herbert },
      { value: 'jillian', id: 7, clicked: false, src: jillian },
      { value: 'joe', id: 8, clicked: false, src: joe },
      { value: 'lois', id: 9, clicked: false, src: lois },
      { value: 'meg', id: 10, clicked: false, src: meg },
      { value: 'peter', id: 11, clicked: false, src: peter },
      { value: 'quagmire', id: 12, clicked: false, src: quagmire },
      { value: 'stewie', id: 13, clicked: false, src: stewie },
      { value: 'tricia', id: 14, clicked: false, src: tricia },

    ]
  )
  const randomizeItems = () => {
    arr = arr.sort(function () {
      return Math.random() - 0.5;
    });
  }
  const resetClicked = () => {
    arr.map((item) => {
      item.clicked = false;
    })
  }
  const clicked = (e) => {
    setCount(count + 1)
    let id = e.target.id;
    const itemPos = arr.findIndex(item => item.id == id);
    if (arr[itemPos].clicked === false) {
      setScore(score + 1);
      arr[itemPos].clicked = true;
    }
    else {
      setScore(0);
      resetClicked();
    }
    randomizeItems();
  }
  useEffect(() => {
    console.log('updating')
    if(highScore <= score){
      setHighScore(score);
    }
  }, [count])
  return (
    <div className='memoryCard'>
      <div className='header'>
        <header>MEMORY GAME</header>
        <div className='scoreContainer'>
          <div>SCORE : {score}</div>
          <div>HIGHSCORE : {highScore}</div>
        </div>
      </div>
      <hr/>
      <div className='pictureGrid'>
        {arr.map(function(item){
          return <div className='gridItem' key={item.id} onClick = {clicked} id = {item.id}>
            <div className='imgContainer'> <img src={item.src} id={item.id} alt = 'char img'/> </div>
            <div id={item.id} className = 'itemText' > {item.value}</div>
          </div>
        })}
      </div>
    </div>
  )
}
export default App