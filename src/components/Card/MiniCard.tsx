import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowReturnRight } from "react-icons/bs";

import { Fade } from "@lib/animation";

interface IMiniCard {
  transition?: object;
  title?: string;
  href: string;
}

export const MiniCard: FC<IMiniCard> = ({ transition, title, href }) => {
  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      animate="visible"
      transition={transition}
      className="border-2 border-gray-800 rounded-lg transition-all duration-300 hover:shadow-3d cursor-pointer"
    >
      <Link
        href={href}
        target="_blank"
        className="p-2 flex items-center justify-between"
      >
        <p className="line-clamp-1 text-base">{title}</p>
        <BsArrowReturnRight />
      </Link>
    </motion.div>
  );
};
