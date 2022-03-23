import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {resetProduct, setProduct} from "../redux/productReducer";
import {useEffect, useMemo} from "react";
import {useStableDispatch} from "./useRedux";
import {fetchGenderProducts, resetErrors} from "../redux/initializeReducer";

export const useProduct = ({genderProducts, productType}) => {
  const productId = useParams();
  const stableDispatch = useStableDispatch();
  const productInfo = useSelector(state => state.product.productInfo);
  const stableProduct = useMemo(() => genderProducts.find(item => item.id === productId.id), [genderProducts, productType, productId.id]);

  useEffect(() => {
    if (genderProducts.length === 0) stableDispatch(fetchGenderProducts(productType));
  }, [productType]);

  useEffect(() => {
    if (genderProducts.length > 0) {
      stableDispatch(setProduct(stableProduct));

      return () => stableDispatch(resetProduct());
    }
    return () => stableDispatch(resetErrors());
  }, [productId, stableDispatch, stableProduct]);

  return productInfo;
}