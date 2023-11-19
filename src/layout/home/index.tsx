import './home.scss';
import React from 'react';
import { useBrowserScrollDown } from '@/hooks/browser';
export const Home = () => {
  const [scrollPercent] = useBrowserScrollDown();
  return (
    <div className={'home'}>
      <img className={'logo'} src={'public/assets/logo.png'} />
      <div className={'word-container'}>
        <div className={`${scrollPercent > 0 ? '' : 'css-typing'}`}>
          <p>Welcome to OWJ.BOX</p>
          <p>This is OhWonJae's Portfolio Site!</p>
        </div>
        <div>
          <img
            className={`down-arrow ${scrollPercent > 0 && 'active'}`}
            src={'public/assets/down-arrow.png'}
          />
        </div>
      </div>
    </div>
  );
};
