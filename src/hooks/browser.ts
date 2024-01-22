import { useEffect, useState } from 'react';
import { PageInfoTypes } from '@/types/layoutTypes';

export const useBrowserScroll = (): [number, number, boolean] => {
  const [prevScrollY, setPrevScrollY] = useState<number>(window.scrollY);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const sectionH = window.innerHeight - 70;
  const scrollDownRange = sectionH * 0.1;
  const scrollUpRange = sectionH * 0.1;
  const [scrollStop, setScrollStop] = useState<boolean>(false);
  const percent =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const scrollToSection = (sectionIdx: number) => {
    setCurrentSection(sectionIdx);
    window.scrollTo({
      top: sectionIdx * sectionH,
    });
  };

  const handleOnScrollEvent = (e: Event) => {
    const currentSectionIdx = currentSection;
    // Object.keys(PageInfoTypes).forEach((key) => {
    //   if (
    //     PageInfoTypes[key].idx < 4 &&
    //     PageInfoTypes[key].idx * sectionH - scrollUpRange < window.scrollY &&
    //     PageInfoTypes[key].idx * sectionH + sectionH + scrollDownRange >=
    //       window.scrollY
    //   ) {
    //     setCurrentSection(PageInfoTypes[key].idx);
    //     return;
    //   }
    // });
    // const sectionTop = currentSection * sectionH;
    // if (
    //   window.scrollY > sectionTop &&
    //   window.scrollY > (currentSection + 1) * sectionH
    // ) {
    //   stopScroll();
    // } else if (
    //   window.scrollY < sectionTop &&
    //   window.scrollY < (currentSection - 1) * sectionH
    // ) {
    //   stopScroll();
    // }

    // setPrevScrollY(window.scrollY);
    // if (
    //   currentSection > 0 &&
    //   currentSection * sectionH - scrollUpRange > window.scrollY &&
    //   (currentSection - 1) * sectionH < window.scrollY
    // ) {
    //   //scrollToSection(currentSection - 1);
    //   return;
    // } else if (
    //   currentSection < 4 &&
    //   currentSection * sectionH + scrollDownRange < window.scrollY &&
    //   (currentSection + 1) * sectionH > window.scrollY
    // ) {
    //   //scrollToSection(currentSection + 1);
    //   return;
    // }
  };

  const handleOnScrollEndEvent = () => {
    setScrollStop(false);
    const sectionTop = currentSection * sectionH;
    if (window.scrollY > sectionTop) {
      if (
        currentSection < 4 &&
        sectionTop + scrollDownRange <= window.scrollY
      ) {
        scrollToSection(currentSection + 1);
        return;
      } else {
        scrollToSection(currentSection);
        return;
      }
    } else {
      if (currentSection > 0 && sectionTop - scrollUpRange > window.scrollY) {
        console.log(
          'scroll up section1',
          sectionTop - scrollUpRange,
          window.scrollY,
        );
        scrollToSection(currentSection - 1);
        return;
      } else {
        console.log(
          'scroll up section2',
          sectionTop - scrollUpRange,
          window.scrollY,
        );
        scrollToSection(currentSection);
        return;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScrollEvent, { passive: false });
    window.addEventListener('scrollend', handleOnScrollEndEvent);

    return () => {
      window.removeEventListener('scroll', handleOnScrollEvent);
      window.removeEventListener('scrollend', handleOnScrollEndEvent);
    };
  }, [prevScrollY, currentSection]);
  return [prevScrollY, currentSection, scrollStop];
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
      element.addEventListener('animationend', handleOnAnimationEndEvent);

      return () => {
        element.removeEventListener('animationend', handleOnAnimationEndEvent);
      };
    }
  }, [element]);
  return [isAnimationEnd];
};
