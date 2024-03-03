import classes from "./PageFooter.module.css"

export const PageFooter = () => {
    return (
        <footer className={classes.footerContainer}>
            <div>
                <div>
                    <h3>JIMMY</h3>
                </div>
                <div>
                    <a >F</a>
                    <a >I</a>
                    <a >W</a>
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