import './footer.scss';
import React, { useEffect } from 'react';
import { SectionWrapper } from '@/layout/wrapper/section-wrapper';
interface IAboutProps {}
export const Footer = () => {
  return (
    <div className={'footer h-16 flex items-center justify-center'}>
      <img src={'public/assets/email.png'} width={50} />
      <span className={'ml-3'}>dhdnjswo5000@naver.com</span>
      <img className={'ml-7'} src={'public/assets/phone.png'} width={50} />
      <span className={'ml-3'}>010-2423-7236</span>
    </div>
  );
};
