import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = props => {
  useEffect(() => {
    props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  });
  const { children } = props;
  return children;
};

export default withRouter(ScrollToTop);
