import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { SectionOnlyText } from "../../components/SectionOnlyText/SectionOnlyText"
import { SectionWithIframe } from "../../components/SectionWithIframe/SectionWithIframe"

export const About = () => {
  const texts = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et iure aperiam tempore laboriosam dolores id, quae natus accusamus debitis dignissimos animi, odit facere facilis dicta sed provident! Error nulla illo impedit tenetur architecto, molestiae nostrum, sint voluptate cupiditate nemo eligendi optio ratione tempore incidunt. Doloribus eos possimus, nulla blanditiis optio unde a eligendi praesentium, perferendis eveniet ad? Vel vero deleniti suscipit sequi hic quidem voluptate aspernatur illum earum quas magni reprehenderit laborum dignissimos mollitia quam ipsa dolore consequuntur inventore, placeat similique molestias odio! Totam eaque dignissimos cumque culpa ullam, amet reprehenderit laboriosam consequatur minus pariatur, et adipisci eius. Dolore.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestiae vero ullam fugiat, dolor consequuntur, vitae placeat ipsam vel perferendis ut quisquam, dignissimos inventore enim? Vero cumque sed esse numquam dicta, delectus molestias temporibus fugiat repudiandae perferendis, optio ratione illo. Exercitationem eligendi amet enim at harum corrupti delectus repellendus consequuntur."]

  return (
    <>
      <Header/>
      <section>
        <SectionWithIframe mainText="Sobre a DBC" srcIframe="https://www.youtube.com/embed/h9HiHkEar-Y" titleIframe="about dbc"/>
        <SectionOnlyText backgroundColor="fff" texts={texts}/>
      </section>
      <Footer/>
    </>
  )
}