import { Container } from "@lib/types/common";

export default function Menu({ children }: Container) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {children}
    </div>
  );
}
