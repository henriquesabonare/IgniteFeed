import { ImageProfile } from "../ImageProfile/imageProfile"
import { ProfileNickName } from "../ProfileNickName/profileNickName" 
import { Job } from "../Job/job"
import "./profile.css"
export function Profile(){
  return(
    <div className="profileData">
      <ImageProfile link="https://avatars.githubusercontent.com/u/48197740?v=4"/>
      <div className="dataComment">
        <div className="containerComment">
          <ProfileNickName nickName="Henrique Lourenço Sabonare" />
          <Job JobContent="Analista de testes"/>
          <p>{Date()}</p>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <div className="deletebutton">
        <button className="lixeira" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.25 5.25H3.75" stroke="#8D8D99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.75 9.75V15.75" stroke="#8D8D99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.25 9.75V15.75" stroke="#8D8D99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#8D8D99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="#8D8D99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      </div>
  </div>
  )
}