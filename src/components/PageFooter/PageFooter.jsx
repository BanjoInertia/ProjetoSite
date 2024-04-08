import classes from "./PageFooter.module.css"

import GitHubIcon from "../../assets/icon-git-hub.svg"
import LinkedinIcon from "../../assets/icon-linkedin.svg"
import PortifolioIcon from "../../assets/icon-portifolio.svg" 

export const PageFooter = () => {
    return (
        <footer className={classes.footer_container}>
            <div>
                <div>
                    <h3>JIMMY</h3>
                </div>
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
            <ul>
                <li>
                    <h2>company</h2>
                </li>
                <li>
                    <p>About</p>
                </li>
                <li>
                    <p>support</p>
                </li>
                <li>
                    <p>contact</p>
                </li>
            </ul>
            <ul>
                <li>
                    <h2>resources</h2>
                </li>
                <li>
                    <p>resource Hub</p>
                </li>
                <li>
                    <p>learn more</p>
                </li>
            </ul>
            <ul>
                <li>
                    <h2>TERMOS DE USO</h2>
                </li>
                <li>
                    <p>Privacidade</p>
                </li>
                <li>
                    <p>Segurança</p>
                </li>
            </ul>
        </footer>
    )
}