import "./global.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

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
      </main>
    </div>
  )
}
