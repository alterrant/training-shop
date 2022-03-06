import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {resetProduct, setProduct} from "../redux/productReducer";
import {useEffect, useMemo} from "react";
import {useStableDispatch} from "./useRedux";

export const useProduct = ({products, productType}) => {
  const memorizedProducts = useMemo(() =>  products,[products]);
  const memorizedProductType = useMemo(() =>  productType,[productType]);
  const productId = useParams();
  const dispatch = useStableDispatch();
  const productInfo = useSelector(state => state.product.productInfo);

  useEffect(() => {
    const product = memorizedProducts[memorizedProductType].find(item => item.id === productId.id);

    dispatch(setProduct(product));

    return () => dispatch(resetProduct());
  }, [productId]);

  return productInfo;
}