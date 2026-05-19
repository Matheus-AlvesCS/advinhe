import { useEffect, useState } from "react"

import "./global.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed"

import { WORDS, type Challenge } from "./utils/words"

import styles from "./app.module.css"

export function App() {
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [score, setScore] = useState(0)

  function startGame() {
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[randomIndex]

    setChallenge(randomWord)

    setLetter("")
    setScore(0)
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim() || RegExp(/[^a-zA-Z]/).test(letter)) {
      setLetter("")
      return alert("Insira uma letra válida!")
    }

    const value = letter.toUpperCase()
    const alreadyUsed = lettersUsed.some((used) => used.value === value)

    if (alreadyUsed) {
      setLetter("")
      return alert("Você já utilizou essa letra!")
    }

    setLettersUsed((prev) => [...prev, { value, correct: false }])
    setLetter("")
  }

  function restartGame() {
    alert("Reiniciando o jogo...")
  }

  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={1} max={10} onRestart={restartGame} />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => (
            <Letter value="" key={index} />
          ))}
        </div>

        <div className={styles.guess}>
          <h4>Palpite</h4>

          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}
