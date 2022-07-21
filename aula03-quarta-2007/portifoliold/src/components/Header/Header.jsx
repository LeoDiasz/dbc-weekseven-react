import { Logo } from "../../components/Logo/Logo"
import styles from "./styles.module.css"

export const Header = () => {
  return (
    <header className={styles.headerContent}>
      <Logo/>
      <nav className={styles.navContent}>
        <ul>
          <li>Sobre</li>
          <li>Projetos</li>
        </ul>
      </nav>
    </header>
  )
}
