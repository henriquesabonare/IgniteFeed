import styles from "./header.module.css"
import igniteLogo from "../../assets/Ignitesimbol.svg"

export function Header(){
  return (
    <div >
      <header className={styles.header}>
        <img src={igniteLogo} alt="logotipo do ignite" />
        <h1>Ignite Feed</h1>
      </header>
    </div>
  )
}