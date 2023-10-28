import { useEffect, useState } from 'react';

export const useBrowserScrollDown = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const handleOnScrollEvent = (e: Event) => {
    if (window.scrollY > 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleOnScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleOnScrollEvent);
    };
  }, []);
  return [isScrollDown];
};

export const useAnimationEnd = (element: HTMLDivElement | null) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const handleOnAnimationEndEvent = (e: Event) => {
    if (!isAnimationEnd) {
      console.log('asdfsdf');
      setIsAnimationEnd(true);
    }
  };
  console.log('elemetn!!', element);
  useEffect(() => {
    if (element) {
      console.log('element!!');
      element.addEventListener('animationend', handleOnAnimationEndEvent);

      return () => {
        element.removeEventListener('animationend', handleOnAnimationEndEvent);
      };
    }
  }, [element]);
  return [isAnimationEnd];
};
