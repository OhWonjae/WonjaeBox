import './career.scss';
import React from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';
export const Career = () => {
  return (
    <SectionWrapper style={{ backgroundColor: '#bb9d9d' }} id={'career'}>
      <div className={'career'}>
        <p className={'title'}>{`경력`}</p>
        <p
          className={'sub'}
        >{`더존비앤에프(2021.08 ~ 현재) - B2B 이커머스 플랫폼`}</p>
        <div className={'company'}>
          <div className={'role'}>
            백오피스 개발
            <br />
            <div className={'text-base'}>(2021.08 ~ 현재)</div>
          </div>
          <div className={'role-detail'}>
            <div className={'skill-list'}>
              <button type="button">React</button>
              <button type="button">SCSS</button>
              <button type="button">TS</button>
              <button type="button">Jest</button>
              <button type="button">MobX</button>
            </div>
            <div className={'md-title'}>
              디자인시스템 개발 및 테스트
              <li>
                Pagination, Z-Indexer, PopOver/Modal 등 공통 라이브러리 개발
              </li>
              <li>Jest, React-Testing-Library를 이용하여 TDD 개발</li>
            </div>

            <div className={'md-title'}>
              프로젝트 구조 세팅
              <li>
                Yarn Workspaces의 모노레포 구조를 적용하여 개발시 생산성 높임
              </li>
              <li>
                Webpack의 ModuleFederation 기능으로 도메인 메뉴별 Micro-Frontend
                아키텍쳐를 적용하여 모노레포가 가지는 의존성 문제 해결
              </li>
            </div>
            <div className={'md-title'}>
              페이지 개발
              <li>
                React 함수형 컴포넌트를 사용하여 게시판, 정산 등 도메인 페이지
                개발
              </li>
            </div>
          </div>
        </div>
        <div className={'company'}>
          <div className={'role'}>
            더포터존 개발
            <br />
            <div className={'text-base'}>(2022.08 ~ 현재)</div>
            <br />
            <button
              type="button"
              className="m-3 whitespace-nowrap inline-block rounded bg-amber-300 px-6 pb-2 pt-2.5 text-xl text-black font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => {
                window.open('https://theporterzone.com', '_blank');
              }}
            >
              사이트
            </button>
          </div>
          <div className={'role-detail'}>
            <div className={'skill-list'}>
              <button type="button">Next v12</button>
              <button type="button">Emotion</button>
              <button type="button">TS</button>
              <button type="button">Jest</button>
              <button type="button">Jotai</button>
              <button type="button">Yarn v3</button>
            </div>
            <ul>
              <div className={'md-title'}>
                페이지 개발
                <li>
                  정산, 선물하기 보관함,할당, 발송 도메인 페이지 및 BFF 개발
                </li>
                <li>회원가입 페이지 로직 리팩토링</li>
              </div>
              <div className={'md-title'}>
                인증 리팩토링 및 보안강화
                <li>Refresh토큰 적용하여 Access토큰 탈취 취약점 보안</li>
                <li>토큰의 쿠키 저장방식 변경</li>
                <li>중복로그인 처리 및 자동 로그아웃 기능 구현</li>
              </div>
              <div className={'md-title'}>
                프로젝트 구조 세팅
                <li>
                  next.js 와 nest.js(BFF) 모노레포 구조 적용하여 개발 편의성
                  높임
                </li>
                <li>
                  nest.js에서 사용하기 위해 모노레포 내부의 공통 타입 빌드파일을
                  cjs와 esm방식 각각 적용
                </li>
              </div>
              <div className={'md-title special'}>
                특이사항
                <li>
                  1차 배포 최적화 - Yarn Berry의 pnp모드 적용하여 next.js,
                  nest.js 각각 전체 배포시간 60% 단축 (기존에 모노레포로 인한
                  리소스 비대화로 약 8분 가량 걸렸던 작업이 3~4분대로 단축)
                </li>
                <li>
                  2차 배포 최적화 - 개발계 서버 이슈로 인한 프론트 배포파일 용량
                  최적화 요청 → next.js의 경우 standalone 방식으로 배포진행
                  (기존 이미지 용량 700mb → 120mb 로 단축)
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
