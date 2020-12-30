import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: 'Software Engineer', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: 'Hi, my name is ',
    name: 'Wonjang Son',
    subtitle: 'I\'m a Software Engineer and I love sandwiches',
    cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'project.jpg',
        title: '',
        info: '',
        info2: '',
        url: '',
        repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project.jpg',
        title: '',
        info: '',
        info2: '',
        url: '',
        repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project.jpg',
        title: '',
        info: '',
        info2: '',
        url: '',
        repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
    networks: [{
            id: nanoid(),
            name: 'twitter',
            url: '',
        },
        {
            id: nanoid(),
            name: 'codepen',
            url: '',
        },
        {
            id: nanoid(),
            name: 'linkedin',
            url: '',
        },
        {
            id: nanoid(),
            name: 'github',
            url: '',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};