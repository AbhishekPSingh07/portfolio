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


