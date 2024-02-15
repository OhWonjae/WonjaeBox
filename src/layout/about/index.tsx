import './about.scss';
import React, { useEffect } from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';
import { MenuInfoTypes } from '@/types/layoutTypes';
import { useAtom } from 'jotai';
import { menusAtom } from '@/atoms/common';
interface IAboutProps {}
export const About = () => {
  const [menus] = useAtom(menusAtom);
  const handleOnScrollToSecondMenu = () => {
    window.scrollTo({
      // 헤더 영역 높이값 빼주기
      top: menus[2].scrollTop - menus[0].scrollTop,
      behavior: 'smooth',
    });
  };
  return (
    <SectionWrapper style={{ backgroundColor: '#6d6b6b' }} id={'about'}>
      <div className={'about mb-32'}>
        <p className={'title'}>{`안녕하세요!`}</p>
        <p
          className={'title'}
        >{`프론트엔드에 도전하고 있는 주니어 개발자 오원재입니다.`}</p>
        <p
          className={'sub'}
        >{`한 그루의 나무보다 넓은 관점의 숲을 보기를 좋아합니다.`}</p>
        <p
          className={'sub'}
        >{`문제를 푸는것도 중요하지만 제시할 수 있는 사람이 되고 싶습니다.`}</p>
        <p
          className={'sub'}
        >{`B2B 이커머스 사이트의 초기세팅부터 런칭까지 진행했습니다.`}</p>
        <button
          type="button"
          className="m-3 inline-block rounded bg-amber-700 px-6 pb-2 pt-2.5 text-xl text-black font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => {
            handleOnScrollToSecondMenu();
          }}
        >
          더 알아보기
        </button>
      </div>
    </SectionWrapper>
  );
};
