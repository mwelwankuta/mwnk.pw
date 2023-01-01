import { CardProps } from "@interfaces/Card";
import Link from "next/link";
import { motion } from "framer-motion";

const Badge = ({ title }: { title?: string }) => {
  return (
    <li className="rounded-sm text-sm px-2 bg-gray-800 py-[2px] cursor-pointer hover:opacity-75">
      {title}
    </li>
  );
};
