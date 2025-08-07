import { m } from "framer-motion";
import {
 
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  LINUS,
  EBIOS,
  Rengineering,
  afev,
  ADPRIVI,
}from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "À propos",
  },
  {
    id: navigationPaths.work,
    title: "Expériences",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Pentesting",
   /* icon: web,*/
  },
  {
    title: "Administration systèmes & réseaux",
   /* icon: mobile,*/
  },
  {
    title: "Machine Learning",
   /* icon: backend,*/
  },
  {
    title: "Audit & évaluation de sécurité",
    /*icon: creator,*/


  },
  {
    title: "Cybersécurité défensive",
    /*icon: creator,*/


  },
   
  


];

const comp = [
  {
    title: "Rigueur",
    
    
  },
  {
    title: "Dynamisme",
   
  },
  {
    title: "Sens du travail en équipe",
 
   
  },


 
];




const tran = [
  {
    title: "Capacités analytiques et de synthèse",
   /* icon:web*/
    
  },
  {
    title: "Vulgarisation technique",
  

  },
  {
    title: "Aisance à l'oral",
    
   
  },
 
];


/*

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },

  
];
*/

const experiences=[ 
    {
    "title": "Audit sécurité – Infrastructures hybrides (Windows/Linux)",
    "company_name": "NelWebdynamics",
    "company_website": "https://www.nickelfox.com/",
    "icon":  crmnext,
    "iconBg": "#E6DEDD",
    "date": "Juillet - Août 2025",
    "points": [
      "Chez NelWebdynamics, j'ai mené un audit de sécurité selon la norme ISO 27001, en me concentrant sur le durcissement des infrastructures hybrides Windows/Linux.",
      "J'ai configuré et sécurisé des services comme Active Directory, DNS et DHCP.",
      "Élaboration de politiques de sécurité et de recommandations alignées sur les standards ISO et Ebios.",
      "Cette expérience a renforcé mes compétences en gestion des risques et en sécurisation des infrastructures."
    ]
  },
 


  {
    "title": "Stagiaire IA – Planification RH intelligente",
    "company_name": "HNM Business Management",
   
    "icon":  crmnext,
    "iconBg": "#E6DEDD",
    "date": "Mai - Juillet 2025",
    "points": [
      "Lors de mon stage chez HNM Business Management, j'ai développé un agent autonome de planification de tâches utilisant des algorithmes d'IA.",
      "Ce projet m'a permis de générer automatiquement des plannings en tenant compte des contraintes métiers, améliorant ainsi l'efficacité opérationnelle.",
      "Ce fut une expérience enrichissante où j'ai pu appliquer mes compétences en IA et en Python pour résoudre des problèmes concrets."
    ]
  }
,



  {
    "title": "Développeur C++ Projet de Stéganographie",
    "company_name": "ESAIP, école d'ingénieurs",
    "company_website": "https://www.nickelfox.com/",
    "icon":  crmnext,
    "iconBg": "#E6DEDD",
    "date": "Nov 2024 - Fév 2025",
    "points": [
      "Développement en C++ d’un algorithme de stéganographie pour dissimuler des images dans d’autres via les bits de poids faible (LSB).",
      "Utilisation de la bibliothèque OpenCV pour la manipulation et l'encodage/décodage pixel par pixel.",
      "Création d’une interface de démonstration permettant de cacher et révéler dynamiquement des images secrètes."
    ]
  },
 {
  title: "Stage en développement web",
  company_name: "SCI Berete",
  company_website: "https://www.businessnext.com/crm",
  icon: crmnext,
  iconBg: "#E6DEDD",
  date: "Mai 2024 - Juin 2024",
  points: [
"Développement d’interfaces web responsives en HTML, CSS, JavaScript et PHP pour la gestion d’une base de données immobilière.",
"Mise en place d’un système d’authentification sécurisé avec formulaire de connexion, enregistrement et gestion des sessions.",
"Amélioration de l’expérience utilisateur et optimisation du temps de chargement grâce à une structuration claire du code.",
  ],
},


 

];
/*
const experiences = [
  {
    title: "Développeur dans un projet de détection de fraudes bancaires via IA",
    company_name: "ESAIP,école d'ingénieurs",
    company_website: "https://www.businessnext.com/crm",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Fev 2025 - Avril 2025",
    points: [
"Conception d’un modèle de machine learning pour identifier les fraudes dans des données bancaires réelles et anonymisées.",
"Optimisation du pipeline de traitement (nettoyage, normalisation, rééquilibrage) pour garantir la fiabilité des prédictions.",
"Développement d’une API fonctionnelle permettant des démonstrations interactives de détection de fraude en temps réel."
    ],
  },
  {
    title: "Développeur C++ Projet de Stéganographie",
    company_name: "ESAIP,école d'ingénieurs",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Fev 2025",
    points: [
    "Développement en C++ d’un algorithme de stéganographie pour dissimuler des images dans d’autres via les bits de poids faible (LSB).",
"Utilisation de la bibliothèque OpenCV pour la manipulation et l'encodage/décodage pixel par pixel.",
"Création d’une interface de démonstration permettant de cacher et révéler dynamiquement des images secrètes.",
    ],
  },
  {
    title: " Réseaux QoS ACL– ESAIP",
    company_name: "ESAIP,école d'ingénieurs",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Novembre 2024",
    points: [
     "Configuration et optimisation de la qualité de service (QoS) sur des équipements réseau pour garantir la priorité du trafic critique.",
"Mise en place de listes de contrôle d’accès (ACL) pour sécuriser les communications selon des règles spécifiques.",
"Tests et validation des performances réseau avec des scénarios simulés d'entreprise et d'éducation.",
    ],
  },
  {
    title: "Administration Linux & Windows",
    company_name: "ESAIP,école d'ingénieurs",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Novembre 2024 - Dec 2024",
    points: [
      "Installation et configuration de serveurs DHCP sur Linux pour l’attribution automatique d’adresses IP dans un réseau local.",
"Mise en place de zones DNS directes et inverses avec Bind9 pour la résolution de noms sur un serveur Debian.",
"Gestion fine des services réseaux Linux : journalisation, dépannage, et vérification de la connectivité avec des outils CLI.",
"Administration de machines virtuelles Windows Server 2019 via Hyper-V pour la gestion des rôles et services réseau.",
"Création et gestion d'utilisateurs, stratégies de groupe (GPO) et unités d’organisation dans un domaine Active Directory.",
"Déploiement de rôles Windows comme DHCP, DNS et services de fichiers (FSRM), avec supervision et tests de connectivité."
    ],
  },
 
];
*/
const projects = [
  
  {
    name: "Administration Windows",
    description:
      "Déploiement d’une infrastructure Active Directory avec gestion centralisée des utilisateurs et des stratégies via GPO, pour un environnement Windows sécurisé et automatisé.",
    tags: [
      {
        name: "Admin Windows",
        color: "blue-text-gradient",
      },
      {
        name: "Linkedin",
        color: "green-text-gradient",
      },
      {
        name: "Windows Server",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },



  {
    "name": "Red Team CTF",
    "description": "Projet de pentest et d'audit de vulnérabilités dans un environnement Active Directory. Utilisation d'outils comme Nmap, Metasploit pour l'exploitation de failles, l'élévation de privilèges et la rédaction d'un rapport de sécurité détaillé.",
    "tags": [
      {
        "name": "Cybersécurité",
        "color": "blue-text-gradient"
      },
      {
        "name": "Pentest",
        "color": "green-text-gradient"
      },
      {
        "name": "Active Directory",
        "color": "pink-text-gradient"
      }
    ],
    "image": ADPRIVI,
    "hosted_link": "https://github.com/Fresnelamh/RedTeamCTF/"
  },
  {
    "name": "EBIOS RM - RGPD",
    "description":"Dans le cadre d’un module académique dédié à la gestion des risques en cybersécurité, j’ai réalisé une analyse des risques liés au RGPD en appliquant la méthode EBIOS Risk Manager. Le projet a porté sur la cartographie des actifs critiques, l’évaluation des impacts et des menaces, ainsi que la formulation de mesures de sécurité conformes à la norme ISO/CEI 27001.",
    "tags": [
      {
        "name": "RGPD",
        "color": "blue-text-gradient"
      },
      {
        "name": "EBIOS RM",
        "color": "green-text-gradient"
      },
      {
        "name": "ISO 27001",
        "color": "pink-text-gradient"
      }
    ],
    "image": EBIOS,
    "hosted_link": "https://github.com/Fresnelamh/EBIOS-RM-RGPD/"
  },

  

   {
    name: "SCI Berete",
    description:
      "Sci Berete est une société immobilière moderne pour laquelle j’ai conçu un site web sur-mesure dans le cadre de mon stage au cours de ma première année de formation, combinant élégance visuelle et fluidité de navigation pour valoriser ses biens et attirer de nouveaux clients.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link: "https://getzeal.co/",
  },








  {
    name: "Fraudshield",
    description:
    "FraudShield est une solution propulsée par l’intelligence artificielle, qui détecte en temps réel les fraudes bancaires en analysant les transactions avec une précision redoutable.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "IA",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://github.com/Fresnelamh/FraudShield/",
  },
  {
    name: "Chess game",
    description:
      "Développement d’un jeu d’échecs en Python combinant logique stratégique, interface intuitive et algorithmes intelligents pour offrir une expérience de jeu fluide et captivante.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "POO",
        color: "green-text-gradient",
      },
      {
        name: "Pygame",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
 
{
    "name": "Reverse Engineering Malware",
    "description": "Analyse statique et dynamique de binaires suspects en utilisant Ghidra et Cuckoo Sandbox. Identification d'indicateurs de compromission (IOCs), analyse du comportement malveillant et rédaction de recommandations pour les centres d'opérations de sécurité (SOC).",
    "tags": [
      {
        "name": "Reverse Engineering",
        "color": "blue-text-gradient"
      },
      {
        "name": "Ghidra",
        "color": "green-text-gradient"
      },
      {
        "name": "Cuckoo Sandbox",
        "color": "pink-text-gradient"
      }
    ],
    "image":Rengineering,
    "hosted_link": "https://github.com/Fresnelamh/ReverseEngineeringMalware/"
  },

,{
    name: "Administration Linux et Réseau",
    description: "Projet de configuration réseau : Multisites, DNS et DHCP. Dans le cadre de ma deuxième année d'études en Bachelor Cybersécurité, j’ai eu l’opportunité de réaliser un projet complet impliquant la mise en place d’une infrastructure réseau avec hébergement web multisite, serveur DNS pour la résolution de noms de domaine, et serveur DHCP pour l’attribution dynamique des adresses IP.",
    tags: [
      {
        name: "Linux",
        color: "blue-text-gradient",
      },
      {
        name: "DNS",
        color: "green-text-gradient",
      },
      {
        name: "DHCP",
        color: "pink-text-gradient",
      },
    ],
    image: LINUS, // Remplacez par le chemin de votre image
    hosted_link: "https://github.com/your-link", // Remplacez par votre lien
  },






];


const d=[
  
   



  {
    name: " Membre du Bureau des Internationaux",
    description:
      "En tant que membre du Bureau des Internationaux à l'ESAIP, je participe activement à l'organisation d'événements et au soutien des étudiants internationaux, facilitant leur intégration.",
    tags: [
      {
        name: "BDI",
        color: "blue-text-gradient",
      },
      {
        name: "ESAIP",
        color: "green-text-gradient",
      },
      {
        name: "Internationaux",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://afev.org/bretagne-pays-loire/angers",
  },

{

  name: "Mentor bénévole à l'Afev",
    description:
      "En tant que bénévole à l'AFEV, j'accompagne des jeunes en difficulté scolaire en leur offrant un soutien éducatif et personnel, adapté à leurs besoins pour surmonter leurs défis académiques.Je les aide à développer leur confiance en eux et leur autonomie, tout en favorisant un environnement d'apprentissage positif.",
    tags: [
      {
        name: "AFEV",
        color: "blue-text-gradient",
      },
      {
        name: "Accompagnement",
        color: "green-text-gradient",
      },
      {
        name: "élèves",
        color: "pink-text-gradient",
      },
    ],
    image: afev,
    hosted_link: "https://afev.org/bretagne-pays-loire/angers",
  },

]

const personalInfo = {
  name: "Fresnel",
  fullName: "Fresnel AMAHOWE",
  email: "ogouyemkadukpefresnel@gmail.com",
  role: "Étudiant en 3ème année de Bachelor Cybersécurité",
  about: `Je suis Fresnel AMAHOWE, étudiant en cybersécurité.
Curieux, rigoureux, et doté de solides compétences rédactionnelles
 et d’analyse, j’ai une forte appétence pour l’apprentissage
 continu,aussi bien en cybersécurité qu’en intelligence artificielle.

Je possède des compétences techniques en pentesting, 
audit, ainsi qu’en administration des systèmes et réseaux.

Je suis actuellement à la recherche d’une alternance pour
 l’année scolaire 2025-2026 (du 1er septembre 2025 au 31 août 2026), 
 et je souhaite avoir l’opportunité de contribuer activement aux missions d'une équipe dynamique où je pourrai mettre mes compétences à profit et apprendre aux côté d'experts.`,
  projectsIntro: `Ces projets illustrent mes compétences
   en intelligence artificielle, cybersécurité, développement web et réseaux.
    Ils témoignent de ma capacité 
  à concevoir des solutions innovantes, 
  sécurisées et performantes à travers 
  des cas concrets et variés.`,
};



const personalInfoa = {
  name: "Ma Formation",
  fullName:"ESAIP,école d'ingénieurs",
  email: "ogouyemkadukpefresnel@gmail.com",
  role: "Étudiant en 3ème année de Bachelor Cybersécurité",
  about: `L'ESAIP forme les experts de demain en cybersécurité
   à travers la formation de BACHELOR Cybersécurité 
  axé sur la pratique ,l'analyse des risques ,la sécurité des données 
  .Une école d'ingénieurs reconnue pour son exigence et son ancrage 
  dans les enjeux actuels de la cybersécurité.`,
  
  projectsIntro: `Ces projets illustrent mes compétences
   en intelligence artificielle, cybersécurité, développement web et réseaux.
    Ils témoignent de ma capacité 
  à concevoir des solutions innovantes, 
  sécurisées et performantes à travers 
  des cas concrets et variés.`,
};
const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1ICCft161weCKlwuaK5FusC6HffSFnPFF/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/fresnel-amahowe-0430a22a4/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Fresnelamh",
      icon: github,
    },
  },
};

export {
  services,

  experiences,
  projects,
  navigationPaths,
  personalInfo,
  personalInfoa,
  publicUrls,
  d,
  comp,
  tran
};
