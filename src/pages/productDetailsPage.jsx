import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails";
import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
    const { id } = useParams();

    return (
        <>
            <ProductDetails id={id} />
        </>
    );
};
