import { useEffect, useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import MainLayout from "@layouts/MainLayout";

import { SEO } from "@components/SEO";
import { Loading } from "@components/animations/Loading";
const Intro = dynamic(() => import("@modules/Home"));
const NavigationBottom = dynamic(
  () => import("@components/Navigation/NavBottom")
);

import { MiniCardProps } from "@interfaces/MiniCard";

const Home: NextPage<{ project: [MiniCardProps] }> = ({ project }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { asPath } = useRouter();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [isLoading]);

  return (
    <>
      <SEO
        title="✱ Full-Stack Developer - DM"
        url={process.env.NEXT_PUBLIC_URL + asPath}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <MainLayout isHeader>
          <Intro project={project} />
          <NavigationBottom />
        </MainLayout>
      )}
    </>
  );
};

export default Home;
