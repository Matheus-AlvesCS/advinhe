import "./global.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

import styles from "./app.module.css"

export function App() {
  function restartGame() {
    alert("Reiniciando o jogo...")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={1} max={10} onRestart={restartGame} />
        <Tip />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <div className={styles.guess}>
          <h4>Palpite</h4>

          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
      </main>
    </div>
  )
}
