import './section-wrapper.scss';
import { ReactNode } from 'react';
import { useBrowserScrollDown } from '@/hooks/browser';

type SectionWrapperTypes = {
  children: ReactNode;
};
export const SectionWrapper = ({ children }: SectionWrapperTypes) => {
  return <div className={'section'}>{children}</div>;
};
