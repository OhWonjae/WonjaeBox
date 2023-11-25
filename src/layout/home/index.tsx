import './home.scss';
import React from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';

interface IHomeProps {
  scrollY: number;
}
export const Home = ({ scrollY }: IHomeProps) => {
  console.log('scrollY', scrollY);
  return (
    <SectionWrapper>
      <div className={'home'}>
        <img className={'logo'} src={'public/assets/logo.png'} />
        <div className={'word-container'}>
          <div className={`${scrollY > 0 ? '' : 'css-typing'}`}>
            <p>Welcome to OWJ.BOX</p>
            <p>This is OhWonJae's Portfolio Site!</p>
          </div>
          <div>
            <img
              className={`down-arrow ${scrollY > 0 && 'active'}`}
              src={'public/assets/down-arrow.png'}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
