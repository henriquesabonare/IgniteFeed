import "./profileNickName.css"
export function ProfileNickName(props){
  return (
    <div className="profileNickNameUser">

    <h3>{props.nickName}</h3><span>(você)</span>

    </div>
  )
}