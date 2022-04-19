import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { resetProduct, setProduct } from "../redux/product-reducer";
import { fetchGenderProducts, resetErrors } from "../redux/initialize-reducer";
import useErrors from "./use-error";

export default ({ genderProducts, productType }) => {
  const productId = useParams();
  const stableDispatch = useDispatch();
  const { productInfo } = useSelector((state) => state.product);
  const stableProduct = useMemo(
    () => genderProducts.find((item) => item.id === productId.id),
    [genderProducts, productType, productId.id]
  );
  const errors = useErrors();

  useEffect(() => {
    if (genderProducts.length === 0)
      stableDispatch(fetchGenderProducts(productType));
  }, [productType]);

  useEffect(() => {
    if (genderProducts.length > 0) {
      stableDispatch(setProduct(stableProduct));

      return () => stableDispatch(resetProduct());
    }
    if (errors.length > 0) return () => stableDispatch(resetErrors());
  }, [productId, stableDispatch, stableProduct]);

  return productInfo;
};
