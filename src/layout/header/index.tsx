import './header.scss';
import React from 'react';
import { GNB } from '@/layout/navigator/gnb';
import { Logo } from '@/components/logo';
import { useBrowserScrollDown } from '@/hooks/browser';

export const Header = () => {
  const [isScrollDown] = useBrowserScrollDown();
  return (
    <div className={`header ${isScrollDown && 'active'}`}>
      <div className={'menu'}>
        <Logo />
        <GNB />
        <img className={'menu-icon'} src={'public/assets/hamburger.png'} />
      </div>
      <div className={'right-icon'}>
        <img src={'public/assets/blogger.png'} />
        <img src={'public/assets/github.png'} />
      </div>
    </div>
  );
};
