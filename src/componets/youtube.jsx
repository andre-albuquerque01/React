import styles from "../style/midiaSocial.module.css"
import stylesComum from "../style/comum.module.css"
function Youtube() {
    return (
        <div className={styles.youtube}>
            <h1>Vídeos recentes</h1>
            <div className={stylesComum.line}>
                <hr className={stylesComum.one} />
                <hr className={stylesComum.two} />
                <hr className={stylesComum.three} />
            </div>
            <div className={styles.video}>
                <img src="../assets/log.jpg" alt="Vídeo Youtube" />
                <p>Culto da familia</p>
            </div>
        </div>
    )
}
export default Youtube