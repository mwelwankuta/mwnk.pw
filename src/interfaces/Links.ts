import { HTMLAttributes } from "react";
import { NextRouter } from "next/router";

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  router: NextRouter;
  className?: string;
}
