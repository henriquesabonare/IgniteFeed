import "./content.css"
export function Content(props){

  return (
    <div className="contentPostData">
      <p>{props.saudations}</p>
      <p>{props.body}</p>
      <a href={props.link} target="_blank"><span>{props.complementLink}</span>👉Github</a>

      <div className="hashtags">
      <a href="#">{props.hash1}</a>
      <a href="#">{props.hash2}</a>
      <a href="#">{props.hash3}</a>
      </div>

      <hr />
    </div>
  )
}