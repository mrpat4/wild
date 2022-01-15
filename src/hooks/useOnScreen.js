/*eslint-disable */

import React, { useState, useEffect } from 'react';
const useOnScreen = (ref, rootMargin = '0px', active) => {

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => !isIntersecting && setIntersecting(entry.isIntersecting),
      { rootMargin },
    );

    if (ref.current) {
      observer?.observe(ref.current);
    }
    return () => {
      observer?.unobserve(ref.current);
    };
  });

  return isIntersecting;
};

export default useOnScreen;
