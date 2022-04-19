import { useSelector } from "react-redux";
import classNames from "classnames/bind";

export default (
  variable,
  componentCssModule,
  newCssStyle,
  oldCssStyles,
  store
) => {
  const isVariableOk = useSelector((state) => state[store][variable]);

  const cx = classNames.bind(componentCssModule);

  return cx(oldCssStyles, { [newCssStyle]: isVariableOk });
};
