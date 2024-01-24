import './container.scss';
import React from 'react';
type ContainerProps = {
  children?: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return <div className={'containers'}>{children}</div>;
};
