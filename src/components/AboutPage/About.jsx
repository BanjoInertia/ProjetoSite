import classes from "./About.module.css"

export const About = () => {
    const redirectToGmail = () => {
        const userEmail = 'nozembro@gmail.com';

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <div className={classes.about_container}>
            <div className={classes.description_container}>
                <h1>DESCRIÇÃO</h1>
                <p className={classes.description_text}>Bem vindo a loja, fiz esse site pensando em aprimorar meus conhecimentos em desenvolvimento web, lembrando que esse é um projeto fictício e não existe nenhum tipo de venda de produtos de verdade, e não existe nenhuma ligação com a empresa de onde foram tirados os &quot;produtos&quot;.</p>
                <p className={classes.description_text}>Em sua criação foi utilizado o ReactJS, por ser uma ferramenta que eu venho me acostumando a usar, também foram usados o Swiper API e o bootstrap além de outras pequenas bibliotecas para fins de estilização.</p>
            </div>

            <div className={classes.contact_container}>
                <h1>CONTATO</h1>
                <p className={classes.contact_options}>Email: <a className={classes.contact_links} href="#" onClick={redirectToGmail}>nozembro@gmail.com</a></p>
                <p className={classes.contact_options}>GitHub: <a className={classes.contact_links} href="https://github.com/BanjoInertia" target="_blank">BanjoInertia</a></p>
                <p className={classes.contact_options}>LinkedIn: <a className={classes.contact_links} href="https://www.linkedin.com/in/marcelo-ramos-8412202b5" target="_blank">Marcelo Ramos</a></p>
                <p className={classes.contact_options}>Portifólio: <a className={classes.contact_links} href="https://github.com/BanjoInertia" target="_blank">Link</a></p>
            </div>
        </div>
    )
}