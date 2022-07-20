import styles from "./styles.module.css"

export const SectionWithIframe = ({mainText, titleIframe, srcIframe, height}) => {
  return (
    <section className={styles.sectionWithIframe} style={{height: height}}>
      <h1>{mainText}</h1>
      <iframe  title={titleIframe} width="560" height="315" src={srcIframe} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
  )
}