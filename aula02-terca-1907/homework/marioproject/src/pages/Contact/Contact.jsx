import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Input } from "../../components/Input/Input"
import { SelectInput } from "../../components/SelectInput/SelectInput";
import { Textarea } from "../../components/Textarea/Textarea";
import styles from "./styles.module.css";

export const Contact = () => {
  const options = [{value: "curso", text: "Curso"}, {value: "duvidas", text: "Duvidas"}]
  return (
    <>
      <Header/>
      <section className={styles.sectionContact}>
        <div className="container">
          <h1>Contato</h1>

          <form>
            <Input id="name" placeholder="Digite seu nome completo" label="Digite seu nome completo" type="text"/>
            <Input id="name" placeholder="Digite o seu e-mail" label="Digite seu e-mail" type="email"/>
            <SelectInput label="Qual o motivo do contato" id="questao" options={options}/>
            <Textarea placeholder="Digite sua mensagem" label="Sua mensagem" id="mensagem"/>
            <Button text="Salvar" backgroundColor="red" color="#fff"/>
          </form>
        </div>
      </section>
      <Footer direction="column"/>
    </>
  )
}