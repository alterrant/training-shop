import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {resetProduct, setProduct} from "../redux/productReducer";
import {useEffect} from "react";

export const useProduct = ({products, productType}) => {
  const productId = useParams();
  const dispatch = useDispatch();
  const productInfo = useSelector(state => state.product.productInfo);

  useEffect(() => {
    const product = products[productType].find(item => item.id === productId.id);

    dispatch(setProduct(product));

    return () => dispatch(resetProduct());
  }, [productId]);

  return productInfo;
}