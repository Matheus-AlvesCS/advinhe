import styles from "./styles.module.css"

import { Letter } from "../Letter"

export function LettersUsed() {
  return (
    <div className={styles.container}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="A" size="small" color="correct" />
        <Letter value="B" size="small" color="wrong" />
        <Letter value="C" size="small" />
      </div>
    </div>
  )
}
