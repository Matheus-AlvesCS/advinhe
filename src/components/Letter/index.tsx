import styles from "./styles.module.css"

type LetterProps = {
  value?: string
  size?: "small" | "default"
  color?: "correct" | "wrong" | "default"
}

export function Letter({ value, size, color }: LetterProps) {
  return (
    <div
      className={`${styles.container}
         ${size === "small" && styles.small}
         ${color === "correct" && styles.correct}
         ${color === "wrong" && styles.wrong}
         `}
    >
      <span>{value}</span>
    </div>
  )
}
