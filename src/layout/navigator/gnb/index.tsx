import React from 'react';
import './gnb.scss';
type GNBProps = {
  children: React.ReactNode;
};
export const GNB = ({ children }: GNBProps) => {
  return (
    <nav className={'gnb'}>
      <ul>
        <li>Sprite Generator</li>
        <li>Resume</li>
        <li>About</li>
      </ul>
    </nav>
  );
};
