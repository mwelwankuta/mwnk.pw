import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowReturnRight } from "react-icons/bs";

import { Fade } from "@lib/animation";
import { Images } from "@components/Images";

interface IMiniCard {
  transition?: object;
  title?: string;
  position: string;
  image: string;
  href: string;
  description: string;
}

export const MiniCard: FC<IMiniCard> = ({
  transition,
  title,
  position,
  image,
  href,
  description,
}) => {
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
        <div className="">
          <div className="flex gap-2 items-center">
            <Images
              src={`/static/${image}`}
              alt={`${title} icon`}
              size="h-6 w-6"
              className="rounded-xl"
            />
            <p className="line-clamp-1 text-lg font-bold">{title}</p>
          </div>
          <p className="line-clamp-1 text-md font-semibold text-gray-300">{position}</p>
          <p className="line-clamp-1 text-base">{description}</p>
        </div>
        <BsArrowReturnRight />
      </Link>
    </motion.div>
  );
};
