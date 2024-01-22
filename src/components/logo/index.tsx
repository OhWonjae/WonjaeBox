import './logo.scss';
import React from 'react';
import { MenuInfoTypes } from '@/types/layoutTypes';
export const Logo = () => {
  return (
    <img
      className={'logo'}
      src={'public/assets/logo.png'}
      onClick={() => {
        window.scrollTo({
          // 헤더 영역 높이값 빼주기
          top: 0,
          behavior: 'smooth',
        });
      }}
    />
  );
};
