import classes from './PageHeader.module.css'

export const PageHeader = () => {
    return (
        <nav className={classes.headerContainer}>
            <section className={classes.header}>
                <p>JIMMY</p>
                <ul className={classes.headerOptions}>
                    <li> <a>home</a>        </li>
                    <li> <a>blitzcrank</a>  </li>
                    <li> <a>soulfighter</a> </li>
                    <li> <a>sobre</a>       </li>
                </ul>
                <a>a</a>
            </section>
        </nav>
    )
}