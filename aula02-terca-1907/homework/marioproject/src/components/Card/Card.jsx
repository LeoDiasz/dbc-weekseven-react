import styles from "./styles.module.css"
export const Card = ({text, url}) => {

  return (
    <div className={styles.cardContent}>
      <img src={url} alt="card" />
      <p>{text}</p>
    </div>
  )
}