import '@/styles/common/base.scss';

import { Header } from '@/layout/header';
import { About } from '@/layout/about';
import { ContentsWrapper } from '@/layout/wrapper/contents-wrapper';
import { Projects } from '@/layout/projects';
import { useBrowserScroll } from '@/hooks/browser_v2';
import { Career } from '@/layout/career';
import React, { useEffect, useState } from 'react';
import { Skills } from '@/layout/skills';
import { Footer } from '@/layout/footer';
import { MainLoading } from '@/pages/main/main-loading';
export const Main = () => {
  const [scrollY] = useBrowserScroll();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [isLoading]);

  return (
    <div style={{ backgroundColor: '#f3f3f3' }}>
      <Header scrollY={scrollY} />

      <MainLoading
        loadingState={(loading: boolean) => {
          setIsLoading(loading);
        }}
      />

      <ContentsWrapper>
        <About />
        <Skills />
        <Career />
        <Projects />
        <Footer />
      </ContentsWrapper>
    </div>
  );
};
