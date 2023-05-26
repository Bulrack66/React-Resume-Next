import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'CV Guillaume Duplan',
  description: "Voici une courte présentation de mon savoir-faire et de mes compétences",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Guillaume Duplan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Altruiste au coeur de feu, je me bats avec le sourire pour atteindre des résultats. 
      Imaginant tout les scénarios possibles avec une volonté de vouloir expérimenter. Voilà pourquoi être <strong>Développeur web</strong> me passionne!
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1OXKiGcukN_VW0GmaqkYRijQawXBAQLex/view?usp=share_link',
      text: 'Mon C.V',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Localisation', text: 'Avignon', Icon: MapIcon},
    {label: 'Âge', text: '33', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Français', Icon: FlagIcon},
    {label: "Centre d'intérêt", text: 'Moto, MMA', Icon: SparklesIcon},
    {label: 'Étude', text: 'OpenClassRooms', Icon: AcademicCapIcon},
    {label: 'Travail', text: "En recherche d'emploi", Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues',
    skills: [
      {
        name: 'Français',
        level: 10,
      },
      {
        name: 'Anglais',
        level: 8,
      },
      {
        name: 'Espagnol',
        level: 7,
      },
      {
        name: 'Chinois (Mandarin)',
        level: 5,
      },
    ],
  },
  {
    name: 'Développement Frontend',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Sass',
        level: 9,
      },
      {
        name: 'Angular',
        level: 3,
      },
    ],
  },
  {
    name: 'Développement Backend',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Php',
        level: 5,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Développement Mobile',
    skills: [
      {
        name: 'React Native',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "SEO Pour une agence de webdesign",
    description: "Ce troisième projet d’Openclassrooms m’a fait comprendre l’importance du SEO (référencement naturel) On nous fournissait le code source du site monté sur CMS (wordpress) Un audit a été effectué pour comprendre les améliorations à mettre en place.",
    url: "https://bulrack66.github.io/La-Panthere-agence-web-design-lyon/",
    image: porfolioImage1,
  },
  {
    title: "Booki",
    description: "Le but de ce premier projet Openclassrooms consistait à intégrer les maquettes fournis aux format desktop tablette et mobile. Language Utilisé HTML/CSS.",
    url: "https://bulrack66.github.io/Booki-3.4/",
    image: porfolioImage2,
  },
  {
    title: "Ohmyfood",
    description: "Dans ce second projet Openclassrooms l’intégration de la maquette devait se faire en Mobile-first. L’adaptation desktop et tablette n’était pas exigé. Language utilisé HTML/CSS grâce aux outils SASS et Git.",
    url: "https://bulrack66.github.io/Ohmyfood/",
    image: porfolioImage3,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    location: "OpenClassrooms",
    title: "Développeur web RNCP 5",
    date: "Juillet 2022",
    content:<p>Grâce à OpenClassRooms j'ai appris à développer des éléments de l'interface d'un site web grâce à des composants React</p>
  },
  {
    location: "CFA-BTP Pyrénées-Orientales - BTP CFA OCCITANIE",
    title: "B.P Monteur dépanneur en froid et climatisation",
    content: <p>Optention d'un Brevet Professionel en alternance dans l'entreprise Climat-Sol</p>,
    date: "Decembre 2007",
  },
];

export const experience: TimelineItem[] = [
  {
    location: "Froid Palombi",
    title: "Dépanneur frigoriste ",
    date: "2023-04-03 à Aujourd'hui",
    content: (<p>Cavaillon, France</p>)
  },
  {
    location: "MCI SAS",
    title: "Technicien frigoriste ",
    date: "2022-02-28 / 2022-05-31",
    content: (<p>Châtenoy-le-Royal, France</p>)
  },
  {
    location: "Axima Réfrigération France",
    title: "Technicien Frigoriste",
    date: "2021-04-30 / 2022-03-31",
    content: (<p>Montceau-les-Mines, France</p>)
  },
  {
    location: "Depan'69",
    title: "Gérant",
    date: "2017-02-28 / 2021-04-30",
    content: (<p>Lyon, France</p>)
  },
  {
    location: "ALTIVEC Business Solutions",
    title: "Responsable d'exploitation",
    date: "2019-06-30 / 2019-10-31",
    content: (
    <p>Région de Lyon, France Gestion portefeuille client et management
       des équipes techniques en binôme.</p>
    ) 
  },
  {
    location: "Ineltec",
    title: "Technicien maintenance des équipements",
    date: "2018-01-31 / 2019-06-30",
    content: (<p>Région de Lyon, France</p>) 
  },
  {
    location: "广州鸿德国际酒店",
    title: "Responsable relations clientèle",
    date: "2014-05-31 / 2015-05-31",
    content: (<p>Guangzhou, Chine</p>)
  },
  {
    location: "Baleo France",
    title: "Commercial",
    date: "2012-09-30 / 2014-05-31",
    content: (<p>Guangzhou, Chine</p>)
  },
  {
    location: "Leroy Merlin",
    title: "Employé Logistique",
    date: "2010-08-05 / 2012-09-01",
    content: (<p>Toulouse, France</p>)
  },
  {
    location: "PlombyClim",
    title: "Gérant",
    date: "2009-02 / 2014-08",
    content: (<p>Perpignan, France</p>)
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Restons en contact!',
  description: "C'est vrai que l'on pourrais s'écrire des lettres mais ça marche pas encore. Il va falloir attendre un peu...",
  items: [
    {
      type: ContactType.Email,
      text: 'gdepan.69@gmail.com',
      href: 'mailto:gdepan.69@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Avignon, France',
      href: 'https://goo.gl/maps/GyqkeTw7k8o4Kx4D6',
    },
    {
      type: ContactType.Instagram,
      text: '@faguoguigui',
      href: 'https://www.instagram.com/faguoguigui/',
    },
    {
      type: ContactType.Github,
      text: 'bulrack66',
      href: 'https://github.com/Bulrack66',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Bulrack66'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/guillaume-d-b30929107/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Guillaumeluhang'},
];
