import Image from 'next/image'
import Socials from './Socials'
import { PageSEO } from './SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Container(props) {
  const { children } = props

  return (
    <div className="bg-gray-50 dark:bg-black justify-between">
      {/* <div className="flex flex-col justify-center">
        <nav className="flex px-4 items-center justify-between w-full relative max-w-1xl mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-black bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
        </nav>
      </div> */}
      <div className="flex flex-col justify-between min-h-screen">
        <main
          id="skip"
          className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-3 xl:space-y-0"
        >
          <div className="w-[80px] sm:w-[176px] relative mb-5 sm:mb-0 mr-auto flex flex-col items-center xl:items-start pt-8 xl:sticky xl:top-12">
            <Image
              alt="Daniel M. Matoongo"
              height={176}
              width={176}
              src="/main.jpg"
              className="rounded-full filter grayscale"
            />
            <Socials />
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </main>
      </div>
    </div>
  )
}
