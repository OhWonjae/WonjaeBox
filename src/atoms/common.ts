import { atom } from 'jotai';
import { BrowserScrollTypes } from '@/types/common';
import { menuInfo, MenuInfoTypes } from '@/types/layoutTypes';

export const browserScrollAtom = atom<BrowserScrollTypes | undefined>(
  undefined,
);

export const menusAtom = atom<menuInfo[]>(
  Object.keys(MenuInfoTypes).map((key) => MenuInfoTypes[key]),
);
