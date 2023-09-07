import styles from "../style/footer.module.css"
import takeThePhone from "../img/takeThePhone.svg"
import logo from "../img/logo.png"
function Footer() {
    return (
            <footer id="footer" className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.logo}>
                    <a href="https://www.ebenezer.com.br/" target="_blank" rel="noopener noreferrer"><img src={logo} alt="Logo Ebenezer" /></a>
                    </div>
                    <div className={styles.copy}>
                        <p>2023 © Igreja Batista Ebenézer. Todos os direitos reservados. - Instrumento de estudo</p>
                    </div>
                    <div className={styles.marca}>
                        <a href="https://github.com/andre-albuquerque01" target="_blank" rel="noopener noreferrer"><img src={takeThePhone} alt="Logo empresa Take the phone" /></a>
                    </div>
                </div>
            </footer>
    )
}
export default Footer