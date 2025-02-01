import React, { useEffect, useState } from 'react'
import './GameBox.css'
import InputLine from '../Inputs/InputLine'

function GameBox({ wrongWord, rightWord, halfWrongWord }) {

  const wordList = [
    "SAGAZ", "DARDO", "PISTA", "FICHA",
    "MEXER", "NOBRE", "SORTE", "AFETO",
    "ROSTO", "ÉTICA", "CAUDA", "FAZER",
    "BRISA", "BEIJO", "ASSIM", "VIGOR",
    "SUTIL", "DOIDO", "SEÇÃO", "PODER",
    "SOBRE", "BARCO", "IDEIA", "BOLSA",
    "MORAL", "DESDE", "MUITO", "JUSTO",
    "HONRA", "SONHO", "GUETO", "ÍNDIO",
    "ETNIA", "ÍCONE", "AMIGO", "ANEXO",
    "LAPSO", "EXPOR", "TEMPO", "ENTÃO",
    "LOUCO", "CASAL", "RESTO", "HÁBIL",
    "SABER", "RISCO", "SERVO", "PESAR",
    "GRAÇA", "DIZER", "CAUSA", "GENRO",
    "DEVER", "POSSE", "SENDO", "BURRO",
    "PROLE", "COMUM", "TEMOR", "AINDA",
    "ESTAR", "CORJA", "ÁPICE", "DETÉM",
    "TALCO", "CEDER", "PAUTA", "QUEDA",
    "CULTO", "DIGNO", "GESSO", "CENSO",
    "MUNDO", "FORTE", "VÍCIO", "VULGO",
    "DENSO", "CRIAR", "CINTO", "FARDO",
    "GRITO", "SUSTO", "PARDO", "LINHA",
    "FRUTO", "FOLGA", "DRAMA", "CRAVO",
    "COURO", "CONDE", "COBRE", "BICHO",
    "ADAGA", "AMPLO", "ABRIR"]

  const [randomWord, setRandomWord] = useState("")

  function WordRandomizer(list) {
    let randomIndex = Math.floor(Math.random() * list.length + 1)
    let word = list[randomIndex - 1]
    return word
  }

  useEffect(() => {
    setRandomWord(WordRandomizer(wordList))

  }, [])
  console.log(randomWord)

  const inputsA = document.querySelectorAll(".inputsA")
  const inputsB = document.querySelectorAll(".inputsB")
  const inputsC = document.querySelectorAll(".inputsC")
  const inputsD = document.querySelectorAll(".inputsD")
  const inputsE = document.querySelectorAll(".inputsE")
  const inputsF = document.querySelectorAll(".inputsF")



  return (
    <>
      <div className='game-box-container'>
        <InputLine lineClass={'inputsA'} InputsLetter={inputsA} randomWord={randomWord} wrongWord={wrongWord} rightWord={rightWord} halfWrongWord={halfWrongWord} />
        <InputLine lineClass={'inputsB'} InputsLetter={inputsB} randomWord={randomWord} wrongWord={wrongWord} rightWord={rightWord} halfWrongWord={halfWrongWord} />
        <InputLine lineClass={'inputsC'} InputsLetter={inputsC} randomWord={randomWord} wrongWord={wrongWord} rightWord={rightWord} halfWrongWord={halfWrongWord} />
        <InputLine lineClass={'inputsD'} InputsLetter={inputsD} randomWord={randomWord} wrongWord={wrongWord} rightWord={rightWord} halfWrongWord={halfWrongWord} />
        <InputLine lineClass={'inputsE'} InputsLetter={inputsE} randomWord={randomWord} wrongWord={wrongWord} rightWord={rightWord} halfWrongWord={halfWrongWord} />
        <InputLine lineClass={'inputsF'} InputsLetter={inputsF} randomWord={randomWord} wrongWord={wrongWord} rightWord={rightWord} halfWrongWord={halfWrongWord} />
      </div>

    </>
  )
}

export default GameBox