import './projects.scss';
import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';

export const Projects = () => {
  return (
    <SectionWrapper style={{ backgroundColor: '#7c684b' }} id={'project'}>
      <div className={'project'}>
        <p className={'title'}>{`개인 프로젝트`}</p>

        <div className={'company'}>
          <div className={'role'}>
            Sprite Generator
            <br />
            <div className={'text-base'}>(2023.09 ~ 2023.10)</div>
            <br />
            <button
              type="button"
              className="m-3 inline-block rounded bg-amber-300 px-6 pb-2 pt-2.5 text-xl text-black font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => {
                window.open('https://sprite.ohwonjae.site/', '_blank');
              }}
            >
              사이트
            </button>
            <button
              type="button"
              className="m-3 inline-block rounded bg-amber-300 px-6 pb-2 pt-2.5 text-xl text-black font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => {
                window.open('https://dhdnjswo5000.tistory.com/72', '_blank');
              }}
            >
              블로그
            </button>
            <button
              type="button"
              className="m-3 inline-block rounded bg-amber-300 px-6 pb-2 pt-2.5 text-xl text-black font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => {
                window.open(
                  'https://github.com/OhWonjae/SpriteGenerator',
                  '_blank',
                );
              }}
            >
              깃허브
            </button>
          </div>
          <div className={'role-detail'}>
            <div className={'skill-list'}>
              <button type="button">React</button>
              <button type="button">Css</button>
              <button type="button">TS</button>
              <button type="button">Jest</button>
            </div>
            <ul>
              <li>
                캔버스에 이미지를 효율적으로 적재 하기 위한 MaxRects 알고리즘
                구현
              </li>
              <li>파일 업로드 시 Sprite 미리보기 및 다운로드가 기능 적용</li>
              <li>Sprite 적용을 위한 StyleSheet 미리보기 기능 적용</li>
              <li>Jest 테스트 커버리지 90% 달성</li>
              <li>AWS S3 / AWS CLOUD FRONT 배포</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
