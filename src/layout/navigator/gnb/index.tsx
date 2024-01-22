import React, { useEffect } from 'react';
import './gnb.scss';
import { useAtom } from 'jotai';
import { menusAtom } from '@/atoms/common';
import { MenuInfoTypes } from '@/types/layoutTypes';

export const GNB = () => {
  const [menus] = useAtom(menusAtom);
  const handleOnScrollToMenu = (id: string) => {
    window.scrollTo({
      // 헤더 영역 높이값 빼주기
      top: menus[MenuInfoTypes[id].idx].scrollTop - menus[0].scrollTop,
      behavior: 'smooth',
    });
  };
  return (
    <nav className={'gnb'}>
      <ul className={'gnb-menus'}>
        {menus.map((m) => (
          <li
            key={m.id}
            onClick={() => {
              handleOnScrollToMenu(m.id);
            }}
          >
            {m.name || ''}
          </li>
        ))}
      </ul>
    </nav>
  );
};
