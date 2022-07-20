import { ListCards } from "../ListCards/ListCards"
import { SectionOnlyText } from "../SectionOnlyText/SectionOnlyText"
import {SectionWithIframe} from "../../components/SectionWithIframe/SectionWithIframe"

import styles from "./styles.module.css"

export const Main = () => {
  const texts = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus fuga inventore assumenda, eius repellendus, soluta molestiae nesciunt placeat autem et nostrum neque error quo quam natus molestias laborum laudantium. Esse, perferendis officia ullam unde ipsa earum nisi nihil iusto ex eveniet repudiandae debitis expedita, dolores quibusdam nulla possimus nam, inventore ut delectus saepe. Eum optio exercitationem harum alias eveniet, atque provident quia earum, sapiente et recusandae voluptatum sequi explicabo dolorum rerum laudantium ullam impedit praesentium officiis, expedita assumenda! Totam aperiam voluptates nemo dolorum accusantium ipsam at alias quaerat blanditiis quibusdam mollitia, tempora nobis perferendis. Voluptas, dignissimos. Consequatur eaque consequuntur dolores culpa animi facere, excepturi voluptatum blanditiis ipsa nisi odit sit at facilis qui veritatis deleniti doloribus beatae natus laborum autem quae, quis corporis totam similique. Exercitationem, tempore ad illo nihil iste cum doloremque, eveniet praesentium officia quos laudantium ducimus reprehenderit quis enim dolor dignissimos adipisci, velit sed aut eos. Blanditiis illo, dignissimos autem magnam quos doloribus accusantium! Inventore autem, iusto ea porro quo delectus maiores similique voluptatum temporibus! Adipisci corporis, aliquid impedit deleniti sed eos placeat atque ullam, ipsam tempora voluptas quas accusantium dolorum! Nemo nostrum, cum qui quasi soluta odio repudiandae, facere similique ducimus quibusdam nisi minus blanditiis!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt fugiat laborum maxime, eveniet dolorum iste repudiandae libero aperiam commodi, sapiente dolore vel nemo expedita vero perferendis quaerat ducimus voluptates."]

  return (
    <main className={styles.mainContent}>
      <section className={styles.sectionListCardsContent}>
        <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
        <ListCards/>
      </section>

      <SectionOnlyText texts={texts} backgroundColor="#44455f" color="#fff"/>
      <SectionWithIframe height="470px" mainText="Endereço da DBC" srcIframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.408912048357!2d-51.20348518434467!3d-29.99641283600583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1655840290707!5m2!1spt-BR!2sbr" titleIframe="address DBC"/>
    </main>
  )
}