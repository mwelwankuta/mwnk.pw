import { ImageProps } from "@interfaces/Images";
import Image from "next/legacy/image";

export const Images = ({ src, alt, className, size, onBlur }: ImageProps) => {
  return (
    <div className={`relative cursor-pointer ${size}`}>
      <Image
        src={src}
        alt={alt}
        className={`${className} z-[2] ${onBlur && "unblur"}`}
        objectFit="cover"
        layout="fill"
        loading="lazy"
      />
    </div>
  );
};
