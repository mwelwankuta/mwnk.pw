import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MainLayout from "@layouts/MainLayout";

import { SEO } from "@components/SEO";
const Intro = dynamic(() => import("@modules/Contacts"));

const Contacts: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="Contact ✱ Software Developer"
        url={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        description="A software developer who loves to build things for the web."
      />
      <MainLayout isHeader>
        <Intro />
      </MainLayout>
    </>
  );
};

export default Contacts;
