import {Post} from "../Post/Post"
import { Header } from "../Header/Header"
import { Sidebar } from "../Sidebar/sidebar"
import { Profile } from "../Profile/profile"

export function App() {

  return (
  <div className="container">
      <Header />
      <div className="main"> 
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="posts"> 
          <Post author="Jane Cooper" job="Gerente de Projeto" saudation="Fala galeraa 👋" content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" hash1Description="#novoProjeto" hash2Description="#NLW" hash3Description="#ROCKETSEAT"
          linkReference="https://www.github.com/henriquesabonare"/> 

          <Post  author="Devon Lane" job="CEO" saudation="Fala pessoal 👋" content="Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 "
          photo="https://avatars.githubusercontent.com/u/6643122?v=4" complement="Acesse e deixe seu Feedback"
          hash1Description="#UIUX" hash2Description="#userExperience"
          linkReference="https://henriquesabonare.github.io/UserCardApiGithub/javaScriptPromiseExercise/"
          profile={<Profile />}
          />
          
        </div>
      </div>
    </div>
  )
}

