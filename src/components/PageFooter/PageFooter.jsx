import classes from "./PageFooter.module.css"

import GitHubIcon from "../../assets/icon-git-hub.svg"
import LinkedinIcon from "../../assets/icon-linkedin.svg"
import PortifolioIcon from "../../assets/icon-portifolio.svg" 

export const PageFooter = () => {
    return (
        <footer className={classes.footer_container}>
            <div>
                <h3>JIMMY</h3>
                <div className={classes.footer_icons}>
                    <a href="https://github.com/BanjoInertia" target="_blank">
                        <img src={GitHubIcon} alt="Git-Hub" />
                    </a>
                    <a href="https://github.com/BanjoInertia" target="_blank">
                        <img src={LinkedinIcon} alt="Linkedin" />
                    </a>
                    <a href="https://github.com/BanjoInertia" target="_blank">
                        <img src={PortifolioIcon} alt="Portifolio" />
                    </a>
                </div>
            </div>
            <div className={classes.footer_items}>
                <ul>
                    <li>
                        <h2>company</h2>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">support</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>resources</h2>
                    </li>
                    <li>
                        <a href="#">resource Hub</a>
                    </li>
                    <li>
                        <a href="#">learn more</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>TERMOS DE USO</h2>
                    </li>
                    <li>
                        <a href="#">Privacidade</a>
                    </li>
                    <li>
                        <a href="#">Segurança</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}