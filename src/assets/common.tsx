import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialItem {
    name: string;
    link: string;
    Icon: React.ReactNode;
}

export const social: SocialItem[] = [
    {
        name: "GitHub",
        link: "https://github.com/AbhishekPSingh07",
        Icon: <FaGithub size={24} />,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/abhishek-singh-3719941ab/",
        Icon: <FaLinkedin size={24} />,
    },
    {
        name: "Twitter",
        link: "https://x.com/SinghAbhi1205",
        Icon: <FaTwitter size={24}/>,
    },
];

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  });
