import './App.css'
import GameBox from './components/GameBox/GameBox'
import Keyboard from './components/Keyboard/Keyboard'
import Title from './components/Title/Title'

function App() {


  function wrongWord(line, userWord, input){

    for(let i = 0; i< line.length; i++ ){
      for(let j =0; j < userWord.length; j++){
        if(line[i].innerHTML === userWord[j] && input[j].style.backgroundColor === "rgb(74, 88, 119)"){
          line[i].style.backgroundColor = "#4A5877"
          console.log('pintou errado')
        }
      }
    }
  }
  function rightWord(line, userWord, input){

    for(let i = 0; i< line.length; i++ ){
      for(let j =0; j < userWord.length; j++){
        if(line[i].innerHTML === userWord[j] && input[j].style.backgroundColor === "rgb(108, 154, 124)"){
          line[i].style.backgroundColor = "#6C9A7C"
          console.log('pintou certo')

        }
      }
    }
  }
  function halfWrongWord(line, userWord, input){

    for(let i = 0; i< line.length; i++ ){
      for(let j =0; j < userWord.length; j++){
        if(line[i].innerHTML === userWord[j] && input[j].style.backgroundColor === "rgb(209, 164, 74)"){
          line[i].style.backgroundColor = "#D1A44A"
          console.log('pintou meio errado')

        }
      }
    }
  }


  return (
    <>
      <div className="wrapper">
        <Title/>
        <GameBox wrongWord={wrongWord } rightWord={rightWord} halfWrongWord={halfWrongWord} />
        <Keyboard/>
      </div>
    </>
  )
}

export default App
