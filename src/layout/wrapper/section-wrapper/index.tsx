import './section-wrapper.scss';
import { CSSProperties, ReactNode, useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { menusAtom } from '@/atoms/common';
import { MenuInfoTypes } from '@/types/layoutTypes';

type SectionWrapperTypes = {
  children: ReactNode;
  style?: CSSProperties;
  id: string;
};
export const SectionWrapper = ({
  children,
  style,
  id,
}: SectionWrapperTypes) => {
  const divRef = useRef(null);
  const [menus, setMenus] = useAtom(menusAtom);
  const handleSetMenuScrollTop = (current: any, id: string) => {
    setMenus((prev) => {
      const idx = MenuInfoTypes[id].idx;
      prev[idx].scrollTop = current.offsetTop;
      const newMenus = prev.concat();
      return newMenus;
    });
  };

  useEffect(() => {
    handleSetMenuScrollTop(divRef.current, id);
  }, [divRef.current, id]);
  return (
    <div className={'section'} ref={divRef} style={style}>
      {children}
      {/*<div className={'scroll-down-section'}>*/}
      {/*  <ScrollDown />*/}
      {/*</div>*/}
    </div>
  );
};
