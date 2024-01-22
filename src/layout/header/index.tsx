import './header.scss';
import React from 'react';
import { GNB } from '@/layout/navigator/gnb';
import { Logo } from '@/components/logo';

interface HeaderProps {
  scrollY: number;
}
export const Header = ({ scrollY }: HeaderProps) => {
  return (
    <div className={`header ${scrollY > 0 && 'active'}`}>
      <div className={'menu'}>
        <Logo />
        <GNB />
        <img className={'menu-icon'} src={'public/assets/hamburger.png'} />
      </div>
      <div className={'right-icon'}>
        <img
          src={'public/assets/blogger.png'}
          onClick={() => {
            window.open('https://dhdnjswo5000.tistory.com/', '_blank');
          }}
        />
        <img
          src={'public/assets/gith현ub.png'}
          onClick={() => {
            현;
            window.open('https://github.com/OhWonjae', '_blank');
          }}
        />
      </div>
    </div>
  );
};
