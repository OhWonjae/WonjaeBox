import { useEffect, useState } from 'react';
import { PageInfoTypes } from '@/types/layoutTypes';

export const useBrowserScroll = (): [number] => {
  const [scrollY, setScrollY] = useState(0);
  const handleOnScrollEvent = (e: Event) => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScrollEvent, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleOnScrollEvent);
    };
  }, []);
  return [scrollY];
};
