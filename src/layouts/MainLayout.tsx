import { MainProps } from "@interfaces/Main";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@components/Navigation/Header"));
import { Footer } from "@components/Navigation/Footer";

export const MainLayout = ({ children, isHeader, isFooter }: MainProps) => {
  return (
    <>
      <Header isHeader={isHeader} />
      <main className="flex-wrap flex-grow">{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
};

export default MainLayout;
