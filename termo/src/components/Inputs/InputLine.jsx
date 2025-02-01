import React from 'react'
import './InputLine.css'

function InputLine({ lineClass, InputsLetter, randomWord, wrongWord, rightWord, halfWrongWord }) {

  const line1Btns = document.querySelectorAll(".line-1 button")
  const line2Btns = document.querySelectorAll(".line-2 button")
  const line3Btns = document.querySelectorAll(".line-3 button")



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
        rightWord(line1Btns,userArr,elements)
        rightWord(line2Btns,userArr,elements)
        rightWord(line3Btns,userArr,elements)
      }
      else if (userArr[i] === randomArr[0] || userArr[i] === randomArr[1] || userArr[i] === randomArr[2] ||
        userArr[i] === randomArr[3] || userArr[i] === randomArr[4]) {
        console.log("esta letra está MEIO certa: " + userArr[i])
        elements[i].style.backgroundColor = "#D1A44A"     
        halfWrongWord(line1Btns,userArr,elements)
        halfWrongWord(line2Btns,userArr,elements)
        halfWrongWord(line3Btns,userArr,elements)
      }
      else {
        console.log("esta letra está errada: " + userArr[i])
          elements[i].style.backgroundColor = "#4A5877"
          wrongWord(line1Btns,userArr,elements)
          wrongWord(line2Btns,userArr,elements)
          wrongWord(line3Btns,userArr,elements)
        }      
    }








  }

  function autoTab() {
  }


  return (
    <div className='inputs'>
      <input autocomplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) }} onChange={() => { autoTab() }} className={lineClass} id={lineClass + "1"} type="text" maxLength={1} />
      <input autocomplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) }} onChange={() => { autoTab() }} className={lineClass} id={lineClass + "2"} type="text" maxLength={1} />
      <input autocomplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) }} onChange={() => { autoTab() }} className={lineClass} id={lineClass + "3"} type="text" maxLength={1} />
      <input autocomplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) }} onChange={() => { autoTab() }} className={lineClass} id={lineClass + "4"} type="text" maxLength={1} />
      <input autocomplete="off" onKeyDown={(e) => { e.key === "Enter" && handleSubmit(InputsLetter) }} onChange={() => { autoTab() }} className={lineClass} id={lineClass + "5"} type="text" maxLength={1} />
    </div>
  )
}

export default InputLine