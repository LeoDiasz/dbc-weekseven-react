import styles from "./styles.module.css"

export const SectionOnlyText = ({backgroundColor, texts, color}) => {
  return (
    <section className={styles.sectionOnlyText}>
      <div className="container" style={{backgroundColor: backgroundColor}}>
        {texts && texts.map(item => (
          <p key={item} style={{color}}>{item}</p>
        ))}
      </div>
    
    </section>
  )
}