import './contents-wrapper.scss';
import React, { useEffect } from 'react';
import { MenuInfoTypes, menuInfo } from '@/types/layoutTypes';
type ContentsWrapperProps = {
  children?: React.ReactNode;
};
export const ContentsWrapper = ({ children }: ContentsWrapperProps) => {
  useEffect(() => {
    const menus = Object.keys(MenuInfoTypes).map((key) => {
      const arr = document.getElementsByClassName('menu');
      console.log('arr', arr);
      MenuInfoTypes[key];
    });
    console.log('menus', menus);
  }, []);

  return <div className={'contents-wrapper'}>{children}</div>;
};
