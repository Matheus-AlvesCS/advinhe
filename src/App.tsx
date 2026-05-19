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

  const ATTEMPTS_MARGIN = 5

  function startGame() {
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[randomIndex]

    setChallenge(randomWord)

    setLetter("")
    setLettersUsed([])
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

    const hits = challenge.word
      .split("")
      .filter((char) => char.toUpperCase() === value).length

    const correct = hits > 0
    const currentScore = score + hits

    setLettersUsed((prev) => [...prev, { value, correct }])
    setScore(currentScore)
    setLetter("")
  }

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  function restartGame() {
    alert("Reiniciando o jogo...")
  }

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if (!challenge) {
      return
    }

    const max_attempts = challenge.word.length + ATTEMPTS_MARGIN

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns! Você venceu!")
      } else if (lettersUsed.length === max_attempts) {
        return endGame(
          "Que pena! você perdeu, a palavra era: " + challenge.word,
        )
      }
    }, 500)
  }, [score, lettersUsed])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={restartGame}
        />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
            )

            return (
              <Letter
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
                key={index}
              />
            )
          })}
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
