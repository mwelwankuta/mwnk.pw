import { useState } from "react";
import Link from "next/link";
import { TbMenu, TbBrandGithub } from "react-icons/tb";

import I from "@components/Icon";
import NavLinks from "@components/Links";
import SideBar from "@components/Navigation/SideBar";

import { HeaderLinkName } from "@lib/utils";
import { HeaderProps } from "@interfaces/Header";
import { siteMetadata } from "@data/siteMetadata";
import { motion } from "framer-motion";

export const Header = ({ isHeader }: HeaderProps) => {
  const [isSideBar, setIsSideBar] = useState<boolean>(false);

  if (isHeader) {
    return (
      <>
        <header className="fixed top-0 left-0 w-full z-10 bg-gray-950">
          <nav className="max-w-screen-md mx-auto grid grid-cols-4 gap py-3 px-3 xl:px-0 border-b-2 border-gray-800">
            <div className="col-span-3 sm:col-span-2 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <I.Copyright className="w-5 h-5 stroke-white" />
                <p>Daniel M. Matongo</p>
              </Link>
            </div>
            <div className="col-span-1 hidden sm:flex items-center justify-center space-x-4">
              {HeaderLinkName.map(({ id, path, title }) => (
                <NavLinks key={id} href={path} className="hover:text-white">
                  {title}
                </NavLinks>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                // scale: 1.05,
                transition: { duration: 0.2 },
                borderColor: "#10B981",
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="col-span-1 flex items-center justify-end space-x-3"
            >
              <Link
                href={siteMetadata.social.github}
                className="p-2 border-2 rounded-lg border-gray-800 hover:border-emerald-400"
                target="_blank"
              >
                <TbBrandGithub className="text-xl" />
              </Link>
              <button
                onClick={() => setIsSideBar(!isSideBar)}
                className="block sm:hidden p-2"
              >
                <TbMenu className="text-xl text-white" />
              </button>
            </motion.div>
          </nav>
        </header>
        <SideBar state={isSideBar} setState={() => setIsSideBar(!isSideBar)} />
      </>
    );
  }

  return <></>;
};

export default Header;
