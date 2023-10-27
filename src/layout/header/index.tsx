import './header.scss';
import React from 'react';
import { GNB } from '@/layout/navigator/gnb';
import { Logo } from '@/components/logo';
type HeaderProps = {
  children: React.ReactNode;
};
export const Header = ({ children }: HeaderProps) => {
  return (
    <div className={'header'}>
      <div className={'menu'}>
        <Logo />
        <GNB />
        <img className={'menu-icon'} src={'public/assets/hamburger.png'} />
      </div>
      <div className={'right-icon'}>
        <img src={'public/assets/github.png'} />
      </div>
    </div>
  );
};
