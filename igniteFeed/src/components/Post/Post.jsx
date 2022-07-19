import { ImageProfile } from "../../components/ImageProfile/imageProfile"
import { Job } from "../Job/job"
import {Publi} from "../Publi/publi"
import {Content} from "../Content/content"
import { Feedback } from "../Feedback/feedback"
import "./post.css"

export function Post (props){
  return (
    <article className="mainPost">
      <header className="headerPost">
        <div className="postProfile">
        <ImageProfile link={props.photo}/>
        <div className="postChar">
          <strong>{props.author}</strong>
          <Job JobContent={props.job}/>
        </div>
        </div>
        <Publi />
      </header>
      <div className="contentPost">
        <Content saudations={props.saudation} body={props.content} complementLink={props.complement} link={props.linkReference} hash1={props.hash1Description} hash2={props.hash2Description} hash3={props.hash3Description} />
      </div>
      <Feedback />
      <div className="profileComment">
        {props.profile}
      </div>
    </article>
  )
}
