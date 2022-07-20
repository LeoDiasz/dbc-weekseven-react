import logoImg from "../../assets/logo.png"
import { Logo } from "../Logo/Logo"
import { NavBar } from "../NavBar/NavBar"

import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.headerContent}>
      <div>
        <Logo url={logoImg}/>
        <span>Melhores alunos do Vemser de todos os tempos</span>
        <NavBar/>
      </div>
      
    </header>
  )
}