import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as feedbacks from "../../../components/ui-feedbacks/messages/messages";
import { useParams } from "react-router";
import { getProduct } from "../../../redux/actions/productActions";

export default function ProductDetails() {
    const productId = useParams().productId;
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.products.product);

    useEffect(() => {
        dispatch(getProduct(productId)).catch(
            (error) => error.response && feedbacks.error(error.response.data)
        );
    }, [productId]);
    return <div>{productId}</div>;
}
