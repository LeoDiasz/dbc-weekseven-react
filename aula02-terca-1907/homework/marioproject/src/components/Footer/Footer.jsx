import { NavBar } from "../NavBar/NavBar"
import styles from "./styles.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <div className="container">
        <NavBar direction="column"/>
        <address>AV.andarai 531 - Porto Alegre</address>
      </div>
    </footer>
  )
}