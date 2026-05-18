import tipIcon from "../../assets/tip.svg"
import styles from "./styles.module.css"

export function Tip() {
  return (
    <div className={styles.container}>
      <img src={tipIcon} alt="tip-icon" />

      <div>
        <h3>Dica</h3>
        <p>Biblioteca para criar interfaces Web com Javascript.</p>
      </div>
    </div>
  )
}
