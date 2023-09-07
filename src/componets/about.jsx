import styles from "../style/about.module.css"
import stylesComum from "../style/comum.module.css"

function About() {
    return (
        <div id="about" className={styles.about}>
            <div className={stylesComum.allTitle}>
                <h1>Sobre nós</h1>
                <div className={stylesComum.line}>
                    <hr className={stylesComum.one} />
                    <hr className={stylesComum.two} />
                    <hr className={stylesComum.three} />
                </div>
                <p>Há quase 30 anos, a Igreja Batista Ebenézer tem levado o “Ide” do Senhor a todas as criaturas. Fundada em 16 de Outubro de 1993 pelo Pr. Jeová de Aquino, a igreja está sediada em Taguatinga/DF e se baseia na Bíblia Sagrada como sua fonte de fé e conduta. Seu propósito é obedecer ao chamado de Jesus de espalhar a Palavra de Deus por meio do estudo, ensino e divulgação.</p>
                <p>A igreja começou como uma congregação da Igreja Evangélica Batista Ebenézer no Guará/DF, liderada pelo saudoso Pr. Mozart Guimarães. Desde então, tem se expandido e cumprido sua missão, conforme expresso em 1 Samuel 7:12, que inspirou seu lema: “Então Samuel pegou uma pedra, colocou-a entre Mizpá e Sem, e chamou-lhe Ebenézer, dizendo: ‘Até aqui o Senhor nos ajudou'”.</p>
                <p>Atualmente, o Ministério Batista Ebenézer é composto por várias congregações espalhadas pelo Distrito Federal, Goiás e Palmas/TO. Além disso, suas programações alcançam vidas no Brasil e no mundo.</p>
                <p>Seja bem-vindo à Igreja Batista Ebenézer, um lugar de paz! Aqui é onde nos encontramos!</p>
            </div>
        </div>
    )
}
export default About