import './about.scss';
import React, { useEffect } from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';
import { MenuInfoTypes } from '@/types/layoutTypes';
interface IAboutProps {}
export const About = () => {
  return (
    <SectionWrapper style={{ backgroundColor: '#6d6b6b' }} id={'about'}>
      <div className={'about mb-32'}>
        <p className={'title'}>{`안녕하세요!`}</p>
        <p
          className={'title'}
        >{`저는 끊임없이 도전하는 프론트엔드 개발자 오원재입니다.`}</p>
        <p
          className={'sub'}
        >{`한 그루의 나무보다 넓은 관점의 숲을 보기를 좋아합니다.`}</p>
        <p
          className={'sub'}
        >{`B2B 이커머스 사이트의 초기세팅부터 런칭까지 진행했습니다.`}</p>
      </div>
    </SectionWrapper>
  );
};
