import {useErrors} from "../../hooks/useError";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import {Outlet} from "react-router-dom";
import Partition from "../common/Partition";
import Errors from "../errors/Errors";

const Main = () => {
  const currentErrors = useErrors();

  return (
      <>
        <Partition/>
        <main>
          {currentErrors.length > 0 && <Errors currentErrors={currentErrors}/>}
          <ShoppingCart/>
          <Outlet/>
        </main>
      </>
  )
}

export default Main;