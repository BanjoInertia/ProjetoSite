import { PageHeader } from "../components/PageHeader/PageHeader"
import { PageFooter } from "../components/PageFooter/PageFooter"
import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails/ProductDetails"
import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
    const { id } = useParams();

    return (
        <>
            <PageHeader />
            <ProductDetails id={id} />
            <PageFooter />
        </>
    )
}