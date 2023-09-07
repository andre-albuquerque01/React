import styles from "../style/midiaSocial.module.css"
import stylesComum from "../style/comum.module.css"
function Instagram() {
    return (
        <div className={styles.instagram}>
            <h1>Imagens recentes</h1>
            <div className={stylesComum.line}>
                <hr className={stylesComum.one} />
                <hr className={stylesComum.two} />
                <hr className={stylesComum.three} />
            </div>
            <div className={styles.instagram}>
                <img src="../assets/log.jpg" alt="Imagem do instagram" />
                <p>Culto da familia</p>
            </div>
        </div>
    )
}
export default Instagram