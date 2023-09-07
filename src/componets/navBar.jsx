import styles from "../style/navBar.module.css"
import logo from "../img/logo.png"
import icone from "../img/iconMenu.svg"
import { useState } from "react"
function NavBar() {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header>
            <nav>
                <div className={styles.logo}>
                    <img src={logo} alt="logo ebenezer" />
                </div>
                <div className={active ? styles.iconActive : styles.icon} onClick={ToggleMode}>
                        <img src={icone} alt="Icone de opções" />
                </div>
                <div className={active ? styles.menuOpen : styles.menuClose}>
                    <div id="itens" className={styles.navigation}>
                        <ul>
                            <li><a href="#about">Sobre nós</a></li>
                            <li><a href="#programacao">Programação</a></li>
                            <li><a href="#contato">Contato</a></li>
                            <li><a href="#localizacao">Localização</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar