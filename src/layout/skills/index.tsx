import './skills.scss';
import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';

export const Skills = () => {
  return (
    <SectionWrapper style={{ backgroundColor: '#7c684b' }} id={'skills'}>
      <div className={'skills'}>
        <p className={'title'}>{`Skills`}</p>
        <div className={'flex w-100 flex-wrap'}>
          <div className={'skill-board '}>
            <button
              type="button"
              className="skill-name"
              onClick={() => {
                window.open('https://sprite.ohwonjae.site/', '_blank');
              }}
            >
              Javascript & Bundler
            </button>
            <ul className={'p-5 text-black'}>
              <li className={'list-disc ml-3'}>
                ES6 문법을 사용할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                Typescript를 사용 할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                모듈 시스템(esm/cjs)을 이해하고 적용할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                JS의 동작원리를 이해하고 설명할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                Webpack사용에 익숙하고 여러 기능을 적용할 수 있습니다.
              </li>
            </ul>
          </div>
          <div className={'skill-board '}>
            <button
              type="button"
              className="skill-name"
              onClick={() => {
                window.open('https://sprite.ohwonjae.site/', '_blank');
              }}
            >
              HTML & CSS
            </button>
            <ul className={'p-5 text-black'}>
              <li className={'list-disc ml-3'}>HTML문법에 익숙합니다.</li>
              <li className={'list-disc ml-3'}>SCSS문법에 익숙합니다.</li>
              <li className={'list-disc ml-3'}>
                Emotion 사용 경험이 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                브라우저 렌더링 과정을 이해하고 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                TailWind 사용 경험이 있습니다.
              </li>
            </ul>
          </div>
          <div className={'skill-board '}>
            <button
              type="button"
              className="skill-name"
              onClick={() => {
                window.open('https://sprite.ohwonjae.site/', '_blank');
              }}
            >
              React & Next & Nest
            </button>
            <ul className={'p-5 text-black'}>
              <li className={'list-disc ml-3'}>
                MobX, Jotai 상태관리 라이브러리 사용 경험이 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                React 함수형 컴포넌트 사용에 익숙합니다.
              </li>
              <li className={'list-disc ml-3'}>
                Next.js와 Nest.js 사용 경험이 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                React-Query 사용 경험이 있습니다.
              </li>
            </ul>
          </div>
          <div className={'skill-board'}>
            <button
              type="button"
              className="skill-name "
              onClick={() => {
                window.open('https://sprite.ohwonjae.site/', '_blank');
              }}
            >
              ETC
            </button>
            <ul className={'p-5 text-black'}>
              <li className={'list-disc ml-3'}>
                Jest와 React-Testing-Library를 사용한 경험이 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                StoryBook과 디자인시스템을 제작한 경험이 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                Yarn 패키지 매니저 사용에 익숙하고 프로젝트 구조 최적화 경험이
                있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
