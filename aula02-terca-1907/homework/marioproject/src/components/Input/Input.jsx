import styles from "./styles.module.css"

export const Input = ({label, type, placeholder, id}) => {
  return (
    <div className={styles.inputContent}>
      <label htmlFor={id}>{label}</label>
      <input id={id}type={type} placeholder={placeholder} />
    </div>
  )
}