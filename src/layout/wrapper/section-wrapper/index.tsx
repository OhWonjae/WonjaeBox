import './section-wrapper.scss';
import { ReactNode } from 'react';

type SectionWrapperTypes = {
  children: ReactNode;
  title: string;
};
export const SectionWrapper = ({ children, title }: SectionWrapperTypes) => {
  return (
    <div className={'section'}>
      <div className={'title'}>{title}</div>
      <div className={'content'}>{children}</div>
    </div>
  );
};
