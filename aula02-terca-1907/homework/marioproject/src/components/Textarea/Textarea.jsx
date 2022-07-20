import styles from "./styles.module.css"

export const Textarea = ({label, placeholder, id}) => {
  return (
    <div className={styles.textareaContent}>
      <label for={id}>{label}</label>
      <textarea name={id} id={id} cols="25" rows="8" placeholder={placeholder}></textarea>
    </div>
  )
}