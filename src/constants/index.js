import {
  github,
  twitter,
  email,
  zhang,
  guo,
  paul,
  youtube,
  telegram_bw,
  checkmark,
  telegram,
  logo_token,
  tokenomics,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "mission",
    title: "Mission",
  },
  {
    id: "problem",
    title: "Problem",
  },
  {
    id: "roadmap",
    title: "Roadmap",
  },
  {
    id: "token",
    title: "Tokenomics",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const missions = [
  {
    id: "mission-1",
    content:
      "To fund highly promising projects focused on basic, early drug discovery and AI-related cancer research",
  },

  {
    id: "mission-2",
    content:
      "To develop and fund tools that promote the reproducibility and sustainability of cancer research. We are particularly interested in developping mechanisms to passively reward research that has been retrospectively validated by the scientific community",
  },

  {
    id: "mission-3",
    content: "To disseminate cancer-related educational content",
  },
];

export const roadmap = [
  {
    stage: "Phase I",
    content: [
      {
        id: "activity-1",
        activity: "Develop and deploy smart contract",
        time: "Q1 2024",
        icon: checkmark,
        icon2: logo_token,
        link: "https://etherscan.io/token/0x1d332e3a96e50e4f7922480d13ddc9042a4cb901",
      },
      {
        id: "activity-2",
        activity: "Launch cancer-focused educational program",
        time: "Q1 2024",
        icon: checkmark,
        icon2: youtube,
        link: "https://www.youtube.com/channel/UCJGgL27h8NORdoqNSoCwQtg",
      },
      {
        id: "activity-3",
        activity: "Tokenomics Development",
        time: "Q1 2024",
        icon: checkmark,
        icon2: tokenomics,
        link: "#token",
      },
    ],
  },
  {
    stage: "Phase II",
    content: [
      {
        id: "activity-1",
        activity: "Token sales",
        time: "Q2 2024",
      },

      {
        id: "activity-2",
        activity: "Set up decentralized exchanges (DEX) For ATCG",
        time: "Q2 2024",
      },
      {
        id: "activity-3",
        activity: "Publishing requests for funding applications",
        time: "Q2 2024 -",
      },
      {
        id: "activity-4",
        activity: "Fund R&D (research and development) applications",
        time: "Q2 2024 -",
      },
    ],
  },
  {
    stage: "Phase III",
    content: [
      {
        id: "activity-1",
        activity: "Mechanisms to passively reward reproducible research",
        time: "Q3 2024-",
      },
    ],
  },
];

export const benefits = [
  {
    id: "Vote on governance proposals, including funding decisions",
    content:
      "Participate in the the voting of governance and funding decisions that determine the future of CancerDAO and cancer research. Your vote is vital to our joint efforts",
  },
  {
    id: "Connect with people from all over the world on a common mission to make cancer history",
    content:
      "You will have the opportunity to network with scientists, patients and physicians, creating a collaborative environment for sharing insights and perspectives",
  },
  {
    id: "Own a share of the value generated by CancerDAO-sponsored research",
    content:
      "Holding ATCG tokens symbolizes your dedication to improving cancer care and your ownership of a share of the value generated by research. In turn, your share ensures the healthy growth of the CancerDAO ecosystem",
  },
  {
    id: "Eligible to receive services and participate in educational programs sponsored by CancerDAO",
    content:
      "You will have the privilege of using the services provided by the research team and participating in educational programs sponsored by CancerDao",
  },
];

export const team = [
  {
    id: "feature-1",
    content:
      "We are a team of researchers, scientists, writers, programmers and advocates committed to the advancement of science and health.",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const tokenomics_progs = [
  {
    id: "tokenomics-1",
    content:
      "In exchange for the ATCG token, CancerDAO will receive initial funding from the community and contributors.",
  },

  {
    id: "tokenomics-2",
    content:
      "These funds will be used to implement the first and subsequent research and development projects.",
  },
  {
    id: "tokenomics-3",
    content:
      "Research projects are expected to generate passive income in exchange for services/tools/IPs and as recognition of the validation of their work.",
  },
  {
    id: "tokenomics-4",
    content:
      "The treasury will benefit from other CancerDAO-sponsored activities.",
  },
  {
    id: "tokenomics-4",
    content:
      "Currently, 70% of the ATCG tokens have not been minted and will be reserved for the long-term development of CancerDAO. The decision to mint or not will be made by the entire CancerDAO community.",
  },
];

export const whyCancerDao = [
  {
    id: "whycancerdao-1",
    content:
      "Despite advances in the field of cancer research and treatment, deaths from cancer continue to rise at an accelerated rate (figure 1, below).",
  },
  {
    id: "whycancerdao-2",
    content:
      "Cancer research requires funding. However, the present funding rate is very low (figure 2). In addition, under the current system, decisions on whether to fund typically require a large amount of preliminary data. However, the generation of these data requires initial funding. As a result, the vast majority of research ideas cannot be tested.",
  },
  {
    id: "whycancerdao-3",
    content:
      "Examining past funding records shows that there are systematic geographic and institutional biases in the allocation of centralized funding resources (figure 3).",
  },
  {
    id: "whycancerdao-4",
    content:
      "The unequal distribution of available funds may have contributed to higher cancer mortality rates in certain areas (figure 4).",
  },
  {
    id: "whycancerdao-5",
    content:
      "Researchers now spend more time applying for grants than actually doing research.",
  },
  {
    id: "whycancerdao-6",
    content:
      "To increase their chances of receiving funding, researchers have an incentive to publish in high-impact journals, even before the data are validated by the scientific community.",
  },
  {
    id: "whycancerdao-7",
    content:
      "It is thought that these problems have contributed to the reproducibility crisis, with studies showing that more than 70% of published cancer papers cannot be replicated.",
  },
  {
    id: "whycancerdao-8",
    content:
      "In a centralized funding system, investors (including taxpayers) have no direct contact with researchers and usually have little influence on funding decisions.",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: telegram_bw,
    link: "https://t.me/+PdY6GumuMV45ZmE5",
  },
  {
    id: "social-media-2",
    icon: github,
    link: "https://github.com/blockchain4sci/github.io",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/cancerdao/",
  },
  {
    id: "social-media-4",
    icon: youtube,
    link: "https://www.youtube.com/channel/UCJGgL27h8NORdoqNSoCwQtg",
  },

  {
    id: "social-media-5",
    icon: email,
    link: "mailto:info@blockchain4sci.org",
  },
];

export const teamData = [
  {
    img: zhang,
    name: "Jinsong Zhang, PhD",
    position:
      "Founder, Web2/Web3/Smart Contract development, Director, Laboratory of Cancer Genomics and Artificial Intelligence. Training: University of Pennsylvania, The Rockefeller University. Discovered AML1-ETO/ETO-E-protein interaction, a potential drug target in acute myeloid leukemia",
    socials: [
      {
        color: "red",
        name: "google",
        link: "https://scholar.google.com/citations?user=kof8uhMAAAAJ&hl=en&oi=ao",
      },
      {
        color: "black",
        name: "github",
        link: "https://github.com/zhangj5/",
      },
    ],
  },
  {
    img: guo,
    name: "Chun Guo, MS",
    position:
      "Program manager, Core Team, Communication, Funding, Education WGs, Manager, Laboratory of Cancer Genomics and Artificial Intelligence. Extensive experience in cancer research as research scientists in prestigious institutions including Memorial Sloan Kettering Cancer Center and Children's Hospital of Philadelphia",
    socials: [],
  },
  {
    img: paul,
    name: "Paul Yang,  MD/PhD",
    position:
      "Co-founder, Core Team, Outreach, communication, Funding, Education WGs, Scientist, Laboratory of Cancer Genomics and Artificial Intelligence. Educator, Harvard University (Faculty), MD/Anderson Cancer Center (Scientist)",
    socials: [],
  },
];
