import '@/styles/common/base.scss';

import { Header } from '@/layout/header';
import { About } from '@/layout/about';
import { ContentsWrapper } from '@/layout/wrapper/contents-wrapper';
import { Home } from '@/layout/home';
import { Projects } from '@/layout/projects';
import { Resume } from '@/layout/resume';
import { useBrowserScroll } from '@/hooks/browser_v2';
import { Career } from '@/layout/career';
export const Main = () => {
  const [scrollY] = useBrowserScroll();
  return (
    <>
      <Header scrollY={scrollY} />
      <ContentsWrapper>
        <Home />
        <About />
        <Career />
        <Projects />
      </ContentsWrapper>
    </>
  );
};
