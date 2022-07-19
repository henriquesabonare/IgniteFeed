import "./feedback.css"

export function Feedback(){
  return (      
  <div className="feedBack">
    <h3>Deixe seu FeedBack</h3>
    <form action="">
      <textarea placeholder="Escreva um comentário..." />
      <button type="button">
        Publicar
      </button>
    </form>  
  </div>
  )
}