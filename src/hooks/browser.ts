import { useEffect, useState } from 'react';
import { PageInfoTypes } from '@/types/layoutTypes';

export const useBrowserScroll = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionH = window.innerHeight - 70;
  const scrollDownRange = sectionH * 0.3;
  const scrollUpRange = sectionH * 0.3;
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
    Object.keys(PageInfoTypes).forEach((key) => {
      if (
        PageInfoTypes[key].idx < 4 &&
        PageInfoTypes[key].idx * sectionH - scrollUpRange < window.scrollY &&
        PageInfoTypes[key].idx * sectionH + sectionH + scrollDownRange >=
          window.scrollY
      ) {
        console.log('choice', PageInfoTypes[key].idx);
        //currentSectionIdx = PageInfoTypes[key].idx;
        setCurrentSection(PageInfoTypes[key].idx);
        // scrollToSection(PageInfoTypes[key].idx);
        return;
      }
    });
    setPrevScrollY(window.scrollY);
    if (
      currentSection > 0 &&
      currentSection * sectionH - scrollUpRange > window.scrollY &&
      (currentSection - 1) * sectionH < window.scrollY
    ) {
      scrollToSection(currentSection - 1);
      return;
    } else if (
      currentSection < 4 &&
      currentSection * sectionH + scrollDownRange < window.scrollY &&
      (currentSection + 1) * sectionH > window.scrollY
    ) {
      scrollToSection(currentSection + 1);
      return;
    }
  };

  const handleOnScrollEndEvent = () => {
    const sectionTop = currentSection * sectionH;
    console.log('st', sectionTop);
    if (window.scrollY > sectionTop) {
      if (
        sectionTop < window.scrollY &&
        sectionTop + scrollDownRange >= window.scrollY
      ) {
        scrollToSection(currentSection);
        return;
      }
    } else {
      if (
        sectionTop - scrollUpRange < window.scrollY &&
        sectionTop > window.scrollY
      ) {
        scrollToSection(currentSection);
        return;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScrollEvent);
    window.addEventListener('scrollend', handleOnScrollEndEvent);

    return () => {
      window.removeEventListener('scroll', handleOnScrollEvent);
      window.removeEventListener('scrollend', handleOnScrollEndEvent);
    };
  }, [prevScrollY, currentSection]);
  return [prevScrollY, currentSection];
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
