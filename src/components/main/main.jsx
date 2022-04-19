import React from "react";
import { Outlet } from "react-router-dom";

import useErrors from "../../hooks/use-error";
import ShoppingCart from "../shoppingCart/shopping-cart";
import Partition from "../common/partition/partition";
import Errors from "../errors/errors";

const Main = () => {
  const currentErrors = useErrors();

  return (
    <>
      <Partition />
      <main>
        {currentErrors.length > 0 && <Errors currentErrors={currentErrors} />}
        <ShoppingCart />
        <Outlet />
      </main>
    </>
  );
};

export default Main;
