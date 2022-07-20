import { Card } from "../Card/Card"
import imgCard from "../../assets/logo.png"
import styles from "./styles.module.css"

export const ListCards = () => {
  
  return (
    <div className={styles.listCardsContent} >
      <Card url={imgCard} text="Cogumelo 1"/>
      <Card url={imgCard} text="Cogumelo 2"/>
      <Card url={imgCard} text="Cogumelo 3"/>
    </div>
  )
}