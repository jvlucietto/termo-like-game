import React from 'react'
import './Keyboard.css'
import { FaDeleteLeft } from "react-icons/fa6";

function Keyboard() {

  return (
    <>
      <div className="keyboard-container">
        <div className='line-1'>
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>R</button>
          <button>T</button>
          <button>Y</button>
          <button>U</button>
          <button>I</button>
          <button>O</button>
          <button>P</button>
        </div>

        <div className='line-2'>
          <button>A</button>
          <button>S</button>
          <button>D</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button id='erase-keyboard-btn'><FaDeleteLeft/></button>

        </div>

        <div className='line-3'>
          <button>Z</button>
          <button>X</button>
          <button>C</button>
          <button>V</button>
          <button>B</button>
          <button>N</button>
          <button>M</button>
          <button onClick={ ()=> {wrongWord(line1Btns)}} id="keyboard-enter-btn">ENTER</button>
        </div>
      </div>
    </>
  )
}

export default Keyboard