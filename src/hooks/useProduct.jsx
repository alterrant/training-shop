import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {resetProduct, setProduct} from "../redux/productReducer";
import {useEffect, useMemo} from "react";
import {useStableDispatch} from "./useRedux";

export const useProduct = ({products, productType}) => {
  /*const memorizedProducts = useMemo(() =>  products,[products]);
  const memorizedProductType = useMemo(() =>  productType,[productType]);*/
  const productId = useParams();
  const stableDispatch = useStableDispatch();
  const productInfo = useSelector(state => state.product.productInfo);
  const stableProduct = useMemo(() => products[productType].find(item => item.id === productId.id), [products, productType]);

  useEffect(() => {
    // const product = memorizedProducts[memorizedProductType].find(item => item.id === productId.id);

    // stableDispatch(setProduct(product));
    stableDispatch(setProduct(stableProduct));

    return () => stableDispatch(resetProduct());
  }, [productId, stableDispatch]);

  return productInfo;
}