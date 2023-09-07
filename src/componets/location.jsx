import stylesComum from "../style/comum.module.css"
import styles from "../style/location.module.css"
function Location() {
    return (
        <div id="localizacao" className={styles.location}>
            <h1>Localização</h1>
            <div className={stylesComum.line}>
                <hr className={stylesComum.one} />
                <hr className={stylesComum.two} />
                <hr className={stylesComum.three} />
            </div>
            <div className={styles.localizacao}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d328.8497237004496!2d-48.07967610720636!3d-15.862618154440614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a32aabf2c6c1f%3A0xde97025c4509d12c!2sIgreja%20Batista%20Eben%C3%A9zer!5e0!3m2!1spt-BR!2sbr!4v1694128895536!5m2!1spt-BR!2sbr" width="300" height="231" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Location