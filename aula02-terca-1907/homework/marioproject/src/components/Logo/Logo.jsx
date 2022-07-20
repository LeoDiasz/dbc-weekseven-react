import styles from "./styles.module.css"

export const Logo = ({url}) => {
  return (
    <>
      <img src={url} className={styles.logo} alt="logo" />
    </>
  )
}