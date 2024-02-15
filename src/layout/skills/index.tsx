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
              Javascript
            </button>
            <ul className={'p-5 text-black'}>
              <li className={'list-disc ml-3'}>
                JS의 내부 동작원리를 이해하고 설명할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                vanillaJS로 컴포넌트 구조를 만들어 어플리케이션을 개발할 수
                있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                모듈 시스템(esm/cjs)을 이해하고 적용할 수 있습니다.
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
              <li className={'list-disc ml-3'}>
                SCSS를 사용하여 원하는 스타일대로 구현할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                브라우저 렌더링 과정을 이해하고 설명할 수 있습니다.
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
              프레임워크
            </button>
            <ul className={'p-5 text-black'}>
              <li className={'list-disc ml-3'}>
                React 함수형 컴포넌트 사용에 익숙합니다.
              </li>
              <li className={'list-disc ml-3'}>
                React 컴포넌트 기반 아키텍쳐를 이해하고 설명할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                Nest.js를 사용하여 BFF를 개발하였고 JWT인증처리를 할 수
                있습니다.
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
                Jest와 react-testing-library로 TDD를 진행할 수 있습니다.
              </li>
              <li className={'list-disc ml-3'}>
                Yarn 패키지 매니저 사용에 익숙하고 Yarn-Berry, Yarn-Workspace를
                통해 프로젝트 구조를 최적화 할 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
