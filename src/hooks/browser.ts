import { useEffect, useState } from 'react';

export const useBrowserScrollDown = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const handleOnScrollEvent = (e: Event) => {
    const percent =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    setScrollPercent(percent);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleOnScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleOnScrollEvent);
    };
  }, []);
  return [scrollPercent];
};

export const useAnimationEnd = (element: HTMLDivElement | null) => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const handleOnAnimationEndEvent = (e: Event) => {
    if (!isAnimationEnd) {
      setIsAnimationEnd(true);
    }
  };
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
