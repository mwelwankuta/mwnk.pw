import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ src, alt, ...props }) => (
  <NextImage
    src={src}
    alt={alt}
    width={props.width}
    height={props.height}
    layout={props.layout}
    objectFit={props.objectFit}
    objectPosition={props.objectPosition}
    className={props.className}
  />
)

export default Image
