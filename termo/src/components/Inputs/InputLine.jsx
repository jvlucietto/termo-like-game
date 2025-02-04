import React, { useEffect, useRef } from 'react'
import './InputLine.css'

function InputLine({ lineClass, InputsLetter, randomWord, wrongWord, rightWord, halfWrongWord, isFirstLine }) {

  const line1Btns = document.querySelectorAll(".line-1 button")
  const line2Btns = document.querySelectorAll(".line-2 button")
  const line3Btns = document.querySelectorAll(".line-3 button")




const inputsRef = [
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null)

]


  useEffect(() => {
    if (inputsRef[0].current && isFirstLine) {
      inputsRef[0].current.focus();
    }
  }, [])





  function handleSubmit() {
    console.log('submitou')
    console.log(InputsLetter)

    const userInput = Array.from(InputsLetter).map((element) => element.value);
    const userArr = userInput.join("").toUpperCase().split("")
    const randomArr = randomWord.split("")
    const elements = document.querySelectorAll(`.${lineClass}`);
    console.log(userArr)
    console.log(randomArr)

    for (let i = 0; i < randomArr.length; i++) {
      if (randomArr[i] === userArr[i]) {
        console.log("esta letra está certa: " + userArr[i])
        elements[i].style.backgroundColor = "#6C9A7C"
        rightWord(line1Btns, userArr, elements)
        rightWord(line2Btns, userArr, elements)
        rightWord(line3Btns, userArr, elements)
      }
      else if (userArr[i] === randomArr[0] || userArr[i] === randomArr[1] || userArr[i] === randomArr[2] ||
        userArr[i] === randomArr[3] || userArr[i] === randomArr[4]) {
        console.log("esta letra está MEIO certa: " + userArr[i])
        elements[i].style.backgroundColor = "#D1A44A"
        halfWrongWord(line1Btns, userArr, elements)
        halfWrongWord(line2Btns, userArr, elements)
        halfWrongWord(line3Btns, userArr, elements)
      }
      else {
        console.log("esta letra está errada: " + userArr[i])
        elements[i].style.backgroundColor = "#4A5877"
        wrongWord(line1Btns, userArr, elements)
        wrongWord(line2Btns, userArr, elements)
        wrongWord(line3Btns, userArr, elements)
      }
    }








  }

  function autoTab(inputIndex) {

      inputIndex.current.focus()

    
    console.log(inputIndex.current)
    console.log(inputIndex.current.id)


  }

  function handleErase(inputIndex, lastIndex){

    console.log(inputIndex.current.value)

    if(inputIndex.current.value.length === 0){
      autoTab(lastIndex)
    }
  }


  return (
    <div className='inputs'>
      <input ref={inputsRef[0]} autoComplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) || e.key === "Backspace" && handleErase(inputsRef[0], inputsRef[0])}} onChange={() => { autoTab(inputsRef[1]) }} className={lineClass} id={lineClass + "1"} type="text" maxLength={1} />
      <input ref={inputsRef[1]} autoComplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) || e.key === "Backspace" && handleErase(inputsRef[1], inputsRef[0])}} onChange={() => { autoTab(inputsRef[2]) }} className={lineClass} id={lineClass + "2"} type="text" maxLength={1} />
      <input ref={inputsRef[2]} autoComplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) || e.key === "Backspace" && handleErase(inputsRef[2], inputsRef[1])}} onChange={() => { autoTab(inputsRef[3]) }} className={lineClass} id={lineClass + "3"} type="text" maxLength={1} />
      <input ref={inputsRef[3]} autoComplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) || e.key === "Backspace" && handleErase(inputsRef[3], inputsRef[2])}} onChange={() => { autoTab(inputsRef[4]) }} className={lineClass} id={lineClass + "4"} type="text" maxLength={1} />
      <input ref={inputsRef[4]} autoComplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) || e.key === "Backspace" && handleErase(inputsRef[4], inputsRef[3])}} className={lineClass} id={lineClass + "5"} type="text" maxLength={1} />
    </div>
  )
}

export default InputLine