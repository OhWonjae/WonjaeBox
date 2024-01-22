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
            (2021.08 ~ 현재)
          </div>
          <div className={'role-detail'}>
            <ul>
              <li>React의 SPA 방식 사용</li>
              <li>
                Yarn Workspaces의 모노레포 구조를 적용하여 개발시 생산성 높임
                (공동 참여)
              </li>
              <li>
                Webpack의 ModuleFederation 기능으로 도메인 메뉴별 Micro-Frontend
                아키텍쳐를 적용하여 모노레포가 가지는 의존성 문제 해결 (공동
                참여)
              </li>
              <li>
                배포시 Jenkins 파이프라인을 통한 CICD 프로세스 구축 (gitlab,
                docker, gitOps, argoCD) (공동 참여)
              </li>
              <li>
                디자인 시스템 공통 UI 라이브러리를 백오피스에 적용하여 테스트를
                하기 위한 Linking 방식 사용
              </li>
              <li>상태 관리를 위해 MobX를 프로젝트에 적용</li>
              <li>
                페이지네이션, Z-Indexer, PopOver 등의 공통 라이브러리 개발
              </li>
              <li>정산, 게시판, 기본 정보 관리 도메인 페이지 개발</li>
            </ul>
          </div>
        </div>
        <div className={'company'}>
          <div className={'role'}>
            <a
              target={'_blank'}
              href={'https://theporterzone.com'}
              rel="noreferrer"
            >
              더포터존 개발
            </a>
            <br />
            (2022.08 ~ 현재)
            <br />
          </div>
          <div className={'role-detail'}>
            <ul>
              <li>
                next.js 와 nest.js(BFF) 모노레포 구조 적용하여 개발 편의성 높임
              </li>
              <li>
                nest.js에서 사용하기 위해 모노레포 내부의 공통 타입 패키지
                빌드파일을 cjs와 esm방식 따로 적용
              </li>
              <li>
                기존의 깃랩 Event Trigger에 따른 불필요한 배포 프로세스 대신에
                젠킨스 Job 직접 빌드하도록 수정하여 젠킨스 용량 과부화 이슈
                해결. 에러에 대비하여 husky 적용
              </li>
              <li>
                1차 배포 최적화 - Yarn Berry의 pnp모드 적용하여 next.js, nest.js
                각각 전체 배포시간 60% 단축 (기존에 모노레포로 인한 리소스
                비대화로 약 8분 가량 걸렸던 작업이 3~4분대로 단축)
              </li>
              <li>
                2차 배포 최적화 - 개발계 서버 이슈로 인한 프론트 배포파일 용량
                최적화 요청 → next.js의 경우 standalone 방식으로 배포진행 (기존
                이미지 용량 700mb → 120mb 로 단축)
              </li>
              <li>정산, 선물하기 보관함,할당, 발송 페이지 및 BFF 개발</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
