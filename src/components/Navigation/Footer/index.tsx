import { FooterProps } from "@interfaces/Footer";
import { FooterLinkName } from "@lib/utils/isNavLinkName";
import Link from "next/link";

export const Footer = ({ isFooter }: FooterProps) => {
  if (isFooter) {
    return (
      <footer className="max-w-screen-md mx-auto px-3 py-4 text-center space-y-3">
        <div className="flex items-center justify-center space-x-5">
          {FooterLinkName.map(({ id, path, icon }) => (
            <Link
              key={id}
              href={path}
              className="text-2xl hover:text-sky-400"
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
        <h3 className="font-normal text-base">
          &copy; {new Date().getFullYear()} Mwelwa Nkuta
        </h3>
      </footer>
    );
  }

  return <></>;
};
