import React, { useEffect } from "react";

interface ScrollProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default ScrollToTop;
