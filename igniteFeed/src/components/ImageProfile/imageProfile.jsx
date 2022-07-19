import imageProfileSvg from "../../assets/imageProfile.svg"

export function ImageProfile(props){
  return (
    <img src={props.link ? props.link : imageProfileSvg} className="imageProfile" alt="Image Profile aside"/>
  )
}