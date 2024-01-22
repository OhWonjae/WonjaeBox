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
            <a
              href={'https://sprite.ohwonjae.site/'}
              target={'_blank'}
              rel="noreferrer"
            >
              Sprite Generator
            </a>
            <br />
            (2023.09 ~ 2023.10)
            <br />
            <a
              href={'https://sprite.ohwonjae.site/'}
              target={'_blank'}
              rel="noreferrer"
            >
              <span className={'img1'}>
                <img width={350} src={'public/assets/SpriteGenerator.gif'} />
              </span>
            </a>
          </div>
          <div className={'role-detail'}>
            <ul>
              <li>
                사진을 업로드하면 바로 Sprite 미리보기 및 다운로드가 가능하고
                Sprite 적용을 위한 StyleSheet 확인 가능
              </li>
              <li>
                Sprite에 이미지를 효율적으로 쌓기 위해 MaxRects 알고리즘 구현
              </li>
              <li>React 18v / 순수 CSS / Typescript / Jest</li>
              <li>Jest 테스트 커버리지 90% 달성</li>
              <li>AWS S3 / AWS CLOUD FRONT 로 배포</li>
            </ul>
            <div className={'project icon'}>
              <img
                src={'public/assets/blogger.png'}
                onClick={() => {
                  window.open('https://dhdnjswo5000.tistory.com/72', '_blank');
                }}
              />
              <img
                src={'public/assets/github.png'}
                onClick={() => {
                  window.open(
                    'https://github.com/OhWonjae/SpriteGenerator',
                    '_blank',
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
