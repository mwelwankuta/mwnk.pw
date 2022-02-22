import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import React from 'react'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  kind?: string
  size?: number
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        {/*
        <div className="flex mb-3 space-x-4">
          <SocialIcon href={siteMetadata.twitter} kind="twitter" size={size} />
          <SocialIcon href={siteMetadata.github} kind="github" size={size} />
          <SocialIcon href={siteMetadata.facebook} kind="facebook" size={size} />
          <SocialIcon href={siteMetadata.youtube} kind="youtube" size={size} />
          <SocialIcon href={siteMetadata.linkedin} kind="linkedin" size={size} />
          <SocialIcon href={siteMetadata.twitter} kind="twitter" size={size} />
        </div>
        */}
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.author}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
