import styles from "../style/programation.module.css"
import stylesComum from "../style/comum.module.css"
function Progamation() {
    return (
        <div id="programacao" className={styles.progamation}>
            <div className={stylesComum.allTitle}>
                <h1>Progamação</h1>
                <div className={stylesComum.line}>
                    <hr className={stylesComum.one} />
                    <hr className={stylesComum.two} />
                    <hr className={stylesComum.three} />
                </div>
                <div className={styles.prog}>
                    <div className={styles.sunday}>
                        <h3>Domingo</h3>
                        <p>Culto da família</p>
                        <p>09 horas e 18 horas</p>
                    </div>
                    <div className={styles.monday}>
                        <h3>Segunda</h3>
                        <p>Dia livre</p>
                    </div>
                    <div className={styles.tuesday}>
                        <h3>Terça-feira</h3>
                        <p>Consagração e tarde da benção</p>
                        <p>08 horas e 15 horas</p>
                    </div>
                    <div className={styles.wednesday}>
                        <h3>Quarta-feira</h3>
                        <p>Culto da vitoria</p>
                        <p>19:30</p>
                    </div>
                    <div className={styles.thursday}>
                        <h3>Quinta-feira</h3>
                        <p>Consagração</p>
                        <p>08 horas</p>
                    </div>
                    <div className={styles.friday}>
                        <h3>Sexta-feira</h3>
                        <p>Culto da unção</p>
                        <p>09 horas e 18 horas</p>
                    </div>
                    <div className={styles.saturday}>
                        <h3>Sábado</h3>
                        <p>Simplemente jovem</p>
                        <p>19:30</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Progamation