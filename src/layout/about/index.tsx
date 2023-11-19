import './about.scss';
import React from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';
export const About = () => {
  return (
    <SectionWrapper title={'About'}>
      <div className={'about'}>
        안녕하세요 오원재입니다
        <br /> 저는 2년차 프론트엔드 개발자입니다.
      </div>
    </SectionWrapper>
  );
};
