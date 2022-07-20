import styles from "./styles.module.css"

export const Button = ({text, backgroundColor, color}) => {
  return (
    <button className={styles.buttonContent} style={{backgroundColor, color}}>{text}</button>
  )
}