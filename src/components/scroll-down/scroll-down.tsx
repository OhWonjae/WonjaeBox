import React from 'react';
import './scroll-down.scss';
import { useAtom } from 'jotai';
import { browserScrollAtom } from '@/atoms/common';

export const ScrollDown = () => {
  const [browserScroll] = useAtom(browserScrollAtom);
  const sectionH = window.innerHeight - 70;
  const scrollDownRange = sectionH * 0.1;
  const scrollUpRange = sectionH * 0.1;
  if (browserScroll) {
    if (window.scrollY > sectionH * browserScroll.currentSection) {
      console.log(
        'current section1',
        browserScroll?.currentSection,
        sectionH,
        scrollDownRange,
        browserScroll?.currentSection * sectionH + scrollDownRange,
        window.scrollY,
      );
    } else {
      console.log(
        'current section2',
        browserScroll?.currentSection,
        sectionH,
        scrollUpRange,
        browserScroll?.currentSection * sectionH - scrollUpRange,
        window.scrollY,
      );
    }
  }

  return (
    <div>
      <img
        className={`down-arrow ${
          browserScroll &&
          browserScroll.currentSection * sectionH + scrollDownRange <=
            browserScroll.scrollY
            ? 'active'
            : ''
        }`}
        src={'public/assets/down-arrow.png'}
      />
    </div>
  );
};
