import '@/styles/common/base.scss';

import { Header } from '@/layout/header';
import { About } from '@/layout/about';
import { ContentsWrapper } from '@/layout/wrapper/contents-wrapper';
import { Home } from '@/layout/home';
import { Projects } from '@/layout/projects';
import { Resume } from '@/layout/resume';
import { useBrowserScroll } from '@/hooks/browser';
export const Main = () => {
  const [scrollY] = useBrowserScroll();
  return (
    <>
      <Header scrollY={scrollY} />
      <ContentsWrapper>
        <Home scrollY={scrollY} />
        <About />
        <Projects />
        <Resume />
      </ContentsWrapper>
    </>
  );
};
