import '@/styles/common/base.scss';

import { Header } from '@/layout/header';
import { About } from '@/layout/about';
import { ContentsWrapper } from '@/layout/wrapper/contents-wrapper';
import { Home } from '@/layout/home';
export const Main = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <Home />
        <About />
      </ContentsWrapper>
    </>
  );
};
