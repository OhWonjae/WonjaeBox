import './home.scss';
import React from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';

export const Home = () => {
  return (
    <SectionWrapper style={{ backgroundColor: 'black' }} id={'home'}>
      <div className={'home'}>
        <img className={'logo'} src={'public/assets/logo.png'} />
        <div className={'word-container'}>
          <div className={`css-typing`}>
            <p>Welcome to OWJ.BOX</p>
            <p>This is OhWonJae's Portfolio Site!</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
