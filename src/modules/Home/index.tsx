import { FC, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import I from "@components/Icon";
import { Images } from "@components/Images";
import { MiniCard } from "@components/Card/MiniCard";

import { FadeContainer, Fade } from "@lib/animation";

import { MiniCardProps } from "@interfaces/MiniCard";
import { WorkProps } from "@interfaces/Jobs";
import { siteMetadata } from "@data/siteMetadata";

// need to move this out of here
const formerEmployers: WorkProps[] = [
  {
    _id: "1",
    title: "DevInterface s.r.l. ",
    description: "DevInterface.",
    siteUrl: "https://www.devinterface.com/it",
  },
  {
    _id: "2",
    title: "Microverse",
    description: "Microverse.",
    siteUrl: "https://www.microverse.org/",
  },
  {
    _id: "3",
    title: "TechSpot Dev",
    description: "TechSpotDev.",
    siteUrl: "https://techspotdev.com/",
  },
];

const HomeModule: FC<{ project: [MiniCardProps] }> = ({ project }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <article className="intro-container sm:pt-0 pt-24 sm:grid-cols-3">
      <motion.div
        variants={FadeContainer}
        initial="hidden"
        animate="visible"
        className="col-span-1 sm:col-span-2"
      >
        <motion.p
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-lg"
        >
          Hi, I&apos;m a Senior
        </motion.p>
        <motion.h1
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="intro-heading -mx-2"
        >
          Full-Stack Developer
        </motion.h1>
        <motion.h5
          variants={Fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="py-3 text-lg md:text-xl text-gray-500 select-none max-w-lg"
        >
          <span className="text-white">from Lusaka, ZM.</span> A self-taught
          developer with a degree in Computer Science.
        </motion.h5>
        <motion.div
          ref={constraintsRef}
          className="flex items-center relative max-w-fit"
        >
          <I.ArrowSnake className="absolute -top-[7.2rem] -left-[5.5rem] w-[84px] h-[172px] fill-white" />
          <motion.button
            drag
            dragConstraints={constraintsRef}
            variants={Fade}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            onClick={() => router.push("/contacts")}
            className="intro-button"
          >
            <I.Mail className="w-5 h-5 mr-2" />
            Let&apos;s talk
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="col-span-1 relative mt-4 xl:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="profile-card"
        >
          <I.Notification className="-right-1 -top-2" />
          <Images
            src="/static/profile-me.jpg"
            alt="Daniel M. profile"
            size="h-14 w-14"
            className="rounded-xl"
          />
          <span className="text-xl font-medium ml-3">
            Hi, I&apos;m Daniel M.{" "}
            <Link href={siteMetadata.resume} className="text-emerald-500">
              <span role="img" aria-label="waving hand" className="wave">
                👋
              </span>
              Resume!
            </Link>
          </span>
        </motion.div>
        <I.ArrowSnake className="absolute hidden xl:inline top-[1rem] -right-[3.8rem] w-[60px] h-[120px] -rotate-12 transform -scale-x-100 fill-white" />
        <p className="text-lg pb-3 pl-2 hover:fg-[#6fd49a]">
          Places I've worked
        </p>
        <div className="space-y-5 pb-10">
          {formerEmployers.map(({ _id, title, siteUrl }, index) => (
            <MiniCard
              key={_id}
              href={siteUrl}
              title={title}
              transition={{ delay: 0.8 + index - 0.4 }}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default HomeModule;
