import { useEffect, useState } from "react"

import "./global.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

import { WORDS, type Challenge } from "./utils/words"

import styles from "./app.module.css"

export function App() {
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function startGame() {
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[randomIndex]

    setChallenge(randomWord)
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

          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  )
}
