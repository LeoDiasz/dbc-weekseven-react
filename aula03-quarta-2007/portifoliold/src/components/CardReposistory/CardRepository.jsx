import moment from "moment"
import styles from "./styles.module.css"
import cardImg from "../../assets/card.png"

export const CardRepository = ({name, url, language, date}) => {
  return (
    <li className={styles.cardContent}>
      <img src={cardImg} alt="card" />
      <div >
        <h4>Nome: Repositório{name}</h4>
        <div>
          <p>link Github: <span>{url}</span></p>
          {language && <p>Principal tecnologia: <span>{language}</span></p>}
          <p>Criado em: <span>{moment(date).format("lll")}</span></p>
        </div>
      </div>
    </li>
  )
}
