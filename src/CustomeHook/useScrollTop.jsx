import React, { useEffect } from "react";

const useScrollTop = ({ pathname }) => {
  return (
    <div>
      {useEffect(() => {
        window.scroll(0, 0);
      }, [pathname])}
    </div>
  );
};

export default useScrollTop;
