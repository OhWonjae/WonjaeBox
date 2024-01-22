export type menuInfo = {
  idx: number;
  id: string;
  name: string;
  scrollTop: number;
};

export const MenuInfoTypes: { [key: string]: menuInfo } = {
  home: { idx: 0, id: 'home', name: 'Home', scrollTop: 0 },
  about: { idx: 1, id: 'about', name: 'About', scrollTop: 0 },
  career: { idx: 2, id: 'career', name: 'Career', scrollTop: 0 },
  project: { idx: 3, id: 'project', name: 'Project', scrollTop: 0 },
};
