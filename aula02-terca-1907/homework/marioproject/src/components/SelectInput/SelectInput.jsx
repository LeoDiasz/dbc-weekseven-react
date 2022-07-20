import styles from "./styles.module.css"

export const SelectInput = ({label, id, options}) => {
  return (
    <div className={styles.selectContent}>
      <label for={id}>{label}</label>
      <select name={id} id={id}>
        {options && options.map(option => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  )
}