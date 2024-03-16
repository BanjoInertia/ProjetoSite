import products from "../../../../public/data.json"

import classes from "./ProductList.module.css"

export const ProductList = () => {
    return (
        <div className={classes.product_container}>
            {
                products.map((product, index) => (
                    <div key={index}>
                        <img className={classes.products_img} src={product.imageURLs[0]} />
                        <div className={classes.products_info}>
                            <p>dsadsa</p>  

                        </div>
                    </div>
                ))
            }
        </div>
    )
}