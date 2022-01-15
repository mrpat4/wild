import { useLayoutEffect } from 'react';
import { withRouter } from "next/router";
const RenderVsScrollTop = ({ disable, children, location }) => {


  useLayoutEffect(() => {
    if (!disable) window.scrollTo(0, 0);
  }, [location]);

  return children || null;
}
export default RenderVsScrollTop;
