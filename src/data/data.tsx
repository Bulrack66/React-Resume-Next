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
  description: "CV des competences et aquis durant toutes ces années",
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
  name: `Je suis Guillaume Duplan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Originaire de Perpignan, depuis peu je me suis reconvertis en <strong className="text-stone-100">Web développeur</strong>, actuellement
        en recherche d'emploi, j'aimerais trouver une place dans une entreprise qui me permettra d'apprendre different languages<strong className="text-stone-100"></strong>
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100"></strong>,
        <strong className="text-stone-100"></strong>{' '}
        <strong className="text-stone-100"></strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: './assets/resume.pdf',
      text: 'Resume',
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
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Français', Icon: FlagIcon},
    {label: "Centre d'interet", text: 'Moto, MMA', Icon: SparklesIcon},
    {label: 'Etude', text: 'OpenClassRoom', Icon: AcademicCapIcon},
    {label: 'Travail', text: "En recherche d'emploi", Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Spanish',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'Angular',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Php',
        level: 2,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 1,
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
    title: "Développeur web",
    date: "Juillet 2022",
    content:<p>Grace à OpenClassRoom j'ai appris à travailler de façon autonome sur des projets</p>
  },
  {
    location: "CFA-BTP Pyrénées-Orientales - BTP CFA OCCITANIE",
    title: "Froid commercial et industriel",
    content: <p>Optention d'un Brevet Professionel</p>,
    date: "Decembre 2007",
  },
];

export const experience: TimelineItem[] = [
  {
    location: "MCI SAS",
    title: "Technicien frigoriste ",
    date: "2022-02-28 / 2022-05-31",
    content: (<p>"Châtenoy-le-Royal, Bourgogne-Franche-Comté, France"</p>)
  },
  {
    location: "Axima Réfrigération France",
    title: "Technicien Frigoriste",
    date: "2021-04-30 / 2022-03-31",
    content: (<p>"Région de Lyon, France""Montceau-les-Mines, Bourgogne-Franche-Comté, France"</p>)
  },
  {
    location: "Depan'69",
    title: "Gerant",
    date: "2017-02-28 / 2021-04-30",
    content: (<p>"Région de Lyon"</p>)
  },
  {
    location: "ALTIVEC Business Solutions",
    title: "Responsable d'exploitation",
    date: "2019-06-30 / 2019-10-31",
    content: (
    <p>"Région de Lyon, France" Gestion portefeuille client et management
       des équipes techniques en binôme.</p>
    ) 
  },
  {
    location: "Ineltec",
    title: "Technicien maintenance des équipements",
    date: "2018-01-31 / 2019-06-30",
    content: (<p>"Région de Lyon, France"</p>) 
  },
  {
    location: "广州鸿德国际酒店",
    title: "Responsable relations clientèle",
    date: "2014-05-31 / 2015-05-31",
    content: (<p>Guangzhou City, China</p>)
  },
  {
    location: "Baleo France",
    title: "Commercial",
    date: "2012-09-30 / 2014-05-31",
    content: <p>(Guangzhou City, China)</p>
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
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
