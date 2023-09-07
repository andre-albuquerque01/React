import styles from "../style/contat.module.css"
import stylesComum from "../style/comum.module.css"
import insta from "../img/iconsInstagram.svg"
import face from "../img/iconsFacebook.svg"
import youtube from "../img/iconsYoutube.svg"
function Contat() {
    return (
        <div id="contato">
            <h1>Contato</h1>
            <div className={stylesComum.line}>
                <hr className={stylesComum.one} />
                <hr className={stylesComum.two} />
                <hr className={stylesComum.three} />
            </div>
            <div className={styles.icon}>
                <a href="https://instagram.com/ibesam408?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="icone instagram" />
                </a>
                <a href="https://www.facebook.com/ibesamambaianorte?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                    <img src={face} alt="icone facebook" />
                </a>
                <a href="https://www.youtube.com/user/ibesamambaianortee" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="icone youtube" />
                </a>
            </div>
        </div>
    )
}
export default Contat