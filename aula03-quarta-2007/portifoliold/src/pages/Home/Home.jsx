import {useEffect, useState} from "react"
import { CardRepository } from "../../components/CardReposistory/CardRepository"
import { Header } from "../../components/Header/Header"

import { api } from "../../services/api"
import styles from "./styles.module.css"

export const Home = () => {
  const [listRepository, setListRepository] = useState([])

  const searchdatas = async () => {
    try {
      const {data: repos} = await api.get("/users/LeoDiasz/repos")
    
      setListRepository(repos)
    } catch {
      console.log("Erro ao acessar")
    }
    
  }

  useEffect( () => {

    searchdatas()

  }, [])

  
  return (
    <>
      <div className={styles.divContainerBanner}>
        <Header/>
        <main className={styles.mainContent}>
          <div>
              <h1>Seja bem vindo a selva!</h1>
              <h2>Conheça o Leonardo Dias e seus principais projetos</h2>
              <button>
                Projetos
              </button>
          </div>
        </main>
      </div>
      <section className={styles.sectionProjects}>
        <h1>Projetos</h1>
        
        <ul className={styles.listCardsRepository}>
          {listRepository && listRepository.map(repository => (
            <CardRepository date={repository.created_at} name={repository.name} url={repository.url} language={repository.language}key={repository.id}/>
          ))}
        </ul>
      </section>
    </>
  )
}
