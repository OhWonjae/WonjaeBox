import './about.scss';
import React, { useEffect } from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';
import { MenuInfoTypes } from '@/types/layoutTypes';
interface IAboutProps {}
export const About = () => {
  return (
    <SectionWrapper style={{ backgroundColor: '#6d6b6b' }} id={'about'}>
      <div className={'about'}>
        <p
          className={'title'}
        >{`안녕하세요! 저는 끊임없이 도전하는 2년차 프론트엔드 개발자 오원재입니다.`}</p>
        <p
          className={'sub'}
        >{`한 그루의 나무보다 넓은 관점의 숲을 보기를 좋아합니다.`}</p>
        <p
          className={'sub'}
        >{`리액트로 B2B 이커머스 사이트의 초기세팅부터 런칭까지 진행했습니다.`}</p>
        <div className={'skill'}>
          <div className={'role'}>Frontend</div>
          <div className={'skill-name'}>
            <ul>
              <li>HTML5</li>
              <li>CSS(SCSS)</li>
              <li>React v18</li>
              <li>Next v12</li>
              <li>Javascript ES6</li>
              <li>Yarn Berry</li>
              <li>Webpack</li>
              <li>Jotai</li>
              <li>Module System(CJS, ESM)</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
