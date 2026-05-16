import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

import styles from "./styles.module.css"

type HeaderProps = {
  current: number
  max: number
  onRestart: () => void
}

export function Header({ current, max, onRestart }: HeaderProps) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button type="button">
          <img src={restart} alt="restart-icon" onClick={onRestart} />
        </button>
      </header>
    </div>
  )
}
