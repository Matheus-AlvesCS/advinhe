import "./global.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"

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
      </main>
    </div>
  )
}
