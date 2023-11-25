import './contents-wrapper.scss';
import React from 'react';
import { useBrowserScrollDown } from '@/hooks/browser';
type ContentsWrapperProps = {
  children?: React.ReactNode;
};
export const ContentsWrapper = ({ children }: ContentsWrapperProps) => {
  return <div className={'contents-wrapper'}>{children}</div>;
};
