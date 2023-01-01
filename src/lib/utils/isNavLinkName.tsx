import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandVercel,
} from "react-icons/tb";
import {
  BsInstagram,
  BsLinkedin,
  BsFileEarmarkTextFill,
  BsGithub,
} from "react-icons/bs";
import { siteMetadata } from "@data/siteMetadata";

export const HeaderLinkName = [
  // { id: 1, title: "Home", path: "/" },
  // { id: 2, title: "Projects", path: "/projects" },
];

export const NavigationBottomLinkName = [
  {
    id: 1,
    path: siteMetadata.social.linkedin,
    title: "Linkedin",
    icon: <BsLinkedin />,
  },
  {
    id: 2,
    path: siteMetadata.resume,
    title: "Resume",
    icon: <BsFileEarmarkTextFill />,
  },
  {
    id: 3,
    path: siteMetadata.social.github,
    title: "Github",
    icon: <BsGithub />,
  },
];

export const SidebarLinkSocial = [
  {
    id: 1,
    path: "https://www.instagram.com/mmatongo",
    title: "Instagram",
    icon: <BsInstagram />,
  },
];

export const FooterLinkName = [
  { id: 1, path: "https://tailwindcss.com", icon: <TbBrandTailwind /> },
  { id: 2, path: "https://nextjs.org", icon: <TbBrandNextjs /> },
  { id: 3, path: "https://reactjs.org", icon: <TbBrandReactNative /> },
  { id: 4, path: "https://vercel.com", icon: <TbBrandVercel /> },
];
