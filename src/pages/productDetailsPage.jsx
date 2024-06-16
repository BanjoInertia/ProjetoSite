import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails/ProductDetails"
import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
    const { id } = useParams();

    return (
        <>
            <ProductDetails id={id} />
        </>
    )
}