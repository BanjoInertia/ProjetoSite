import products from "../../../../public/data.json"

import classes from "./ProductList.module.css"

import img3 from "../../../assets/Mythic_Skin.png"
import img2 from "../../../assets/Legendary_Skin.png"
import img1 from "../../../assets/Epic_Skin.png"

export const ProductList = () => {

    function getRarity (rarity) {
        if (rarity === 'epic') {
            return img1
        } else if (rarity === 'legendary') {
            return img2
        } else if (rarity === 'mythic') {
            return img3
        } else {
            return 
        }
    }

    return (
        <div className={classes.product_container}>
            {
                products.map((product, index) => (
                    <div key={index} className={classes.products_card}>
                        <img className={classes.products_img} src={product.imageURLs[0]} />
                        <div className={classes.products_info_container}>
                            <div className={classes.products_info}>
                                <p>{product.productName}</p>  
                                <img src={getRarity(product.rarity)} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}