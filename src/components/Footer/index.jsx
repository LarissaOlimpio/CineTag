
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
           
            <h2>
                <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer" >Desenvolvido por Alura</a> e <a href="https://www.linkedin.com/in/larissaolimpio/" target="_blank" rel="noreferrer">Larissa Olimpio</a>
            </h2>
           
        </footer>
    )
}

export default Footer