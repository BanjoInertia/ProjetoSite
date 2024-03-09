import { Link } from 'react-router-dom'
import classes from './PageHeader.module.css'
import ProductCartImage from "../../assets/cart-svgrepo-com.svg"

export const PageHeader = () => {
    return (
        <nav className={classes.header_container}>
            <section className={classes.header}>
                <p>JIMMY</p>
                <ul className={classes.header_options}>
                    <Link to={`/`}>
                        <li>  <a>home</a>  </li>
                    </Link>
                    <li> <a>blitzcrank</a>  </li>
                    <li> <a>soulfighter</a> </li>
                    <li> <a>sobre</a>       </li>
                </ul>
                <button className={classes.ProductCartContainer}>
                    <img src={ProductCartImage} alt="Description of the SVG" />
                    <div>5</div>
                </button>
            </section>
        </nav>
    )
}