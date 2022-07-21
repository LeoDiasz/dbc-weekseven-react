import React from 'react'
import logoImg from "../../assets/logo.png"
import styles from "./styles.module.css"

export const Logo = () => {
  return (
    <img className={styles.logoContent} src={logoImg} alt="logo" width="80px"/>
  )
}
