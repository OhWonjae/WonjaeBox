import { Container } from '@/layout/container';
import { Main } from './main/main';
import { MainLoading } from './main/main-loading';
import { useEffect, useState } from 'react';
export const BootStrap = () => {
  // const [isEntryCached, setIsEntryCached] = useState(
  //   localStorage.getItem('entry-cached') === 'cached',
  // );
  // useEffect(() => {
  //   if (isEntryCached && !localStorage.getItem('entry-cached')) {
  //     //localStorage.setItem('entry-cached', 'cached');
  //   }
  // }, [isEntryCached]);
  return (
    <Container>
      <Main />
      {/*{isEntryCached ? (*/}
      {/*  <Main />*/}
      {/*) : (*/}
      {/*  <MainLoading*/}
      {/*    loadingState={(loading: boolean) => {*/}
      {/*      setIsEntryCached(!loading);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </Container>
  );
};
