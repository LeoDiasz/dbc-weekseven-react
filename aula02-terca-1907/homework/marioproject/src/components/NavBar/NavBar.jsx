import styles from "./styles.module.css"

export const NavBar = ({direction}) => {
  
  return (
    <nav className={styles.navContent} >
      <ul style={direction === "column" ? {flexDirection: "column"} : {flexDirection: "row"}}>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}