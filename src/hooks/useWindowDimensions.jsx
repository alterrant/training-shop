import { useState, useEffect } from 'react';
import {getWindowDimensions} from "../encapsulatedCommonLogics/getWindowDimensions";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  return windowDimensions;
}