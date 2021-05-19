import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Filoscoder', // e.g: 'Name | Developer'
  lang: ['en', 'es', 'kr'], // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
  img: 'profile.jpg',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Daniel Son',
  subtitle: "I'm a Software Engineer who thinks coding should be altruistic",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I was born in South Korea, raised in Argentina, and worked in many countries like Argentina, United States, Mexico, and Spain.',
  paragraphTwo:
    "Now I'm working as a Software engineer. I am always open to develop on both, client and the server-side.",
  paragraphThree:
    'Love meeting people with different backgrounds & share my insights to them!',
  resume:
    'https://drive.google.com/file/d/1gguHUbVpJZGC3Zt-bI3g4G5vz_Rm7hWv/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dooboo-select.png',
    title: "'Dooboo-ui' (Open-source contribution)",
    info: 'React-native `Select` ui component',
    info2:
      'Stack: Typescript, React-Native, styled-components, Expo (cross-platform), Jest',
    url: '',
    repo: 'https://github.com/dooboolab/dooboo-ui/tree/master/main/Select', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dooboo-charts.png',
    title: "'Dooboo-ui' (Open-source contribution)",
    info: 'React-native `Charts` ui package',
    info2:
      'Stack: Typescript, React-Native, styled-components, Expo (cross-platform), Jest',
    url: '',
    repo: 'https://github.com/dooboolab/dooboo-ui/tree/master/packages/Charts', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'plating.png',
    title: 'Landing page',
    info: 'Front: React, Styled-components',
    info2: 'Back: AWS, NginX',
    url: 'https://plating.co.kr/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'plating-admin.png',
    title: 'Admin page',
    info: 'Front: React, React-hooks + MobX, Ant-design, moduled CSS.',
    info2: 'Back: Node.js + Express (REST API), Sequelize ORM, MySQL.',
    url:
      'https://thumbs.gfycat.com/InferiorWellwornHeterodontosaurus-size_restricted.gif',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'plating-logo.png',
    title: 'Dashboard page',
    info: 'Front: React, React-hooks, Ant-design.',
    info2: 'Back: Firebase products (Authorization, Firestore, Hosting)',
    url:
      'https://thumbs.gfycat.com/PracticalFilthyBasilisk-size_restricted.gif',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you wanna work with me?',
  btn: 'Email me',
  email: 'filoscoder.io@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/filoscoder',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/filoscoder',
    },
  ],
};

// Github stars/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
