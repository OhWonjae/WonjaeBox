import './contents-wrapper.scss';
import React from 'react';
type ContentsWrapperProps = {
  children?: React.ReactNode;
};
export const ContentsWrapper = ({ children }: ContentsWrapperProps) => {
  return <div className={'contents-wrapper'}>{children}</div>;
};
