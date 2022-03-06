import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {resetProduct, setProduct} from "../redux/productReducer";
import {useEffect, useMemo} from "react";
import {useStableDispatch} from "./useRedux";

export const useProduct = ({products, productType}) => {
  const productId = useParams();
  const stableDispatch = useStableDispatch();
  const productInfo = useSelector(state => state.product.productInfo);
  const stableProduct = useMemo(() => products[productType].find(item => item.id === productId.id), [products, productType, productId.id]);

  useEffect(() => {
    stableDispatch(setProduct(stableProduct));

    return () => stableDispatch(resetProduct());
  }, [productId, stableDispatch, stableProduct]);

  return productInfo;
}