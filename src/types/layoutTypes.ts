type pageInfo = {
  idx: number;
  id: string;
  name: string;
};

export const PageInfoTypes: { [key: string]: pageInfo } = {
  Home: { idx: 0, id: 'home', name: 'home' },
  About: { idx: 1, id: 'about', name: 'about' },
  Projects: { idx: 2, id: 'projects', name: 'projects' },
  Resume: { idx: 3, id: 'resume', name: 'resume' },
};
