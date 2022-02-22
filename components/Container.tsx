import Image from 'next/image'
import Socials from './Socials'
import { PageSEO } from './SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Container(props) {
  const { children } = props

  return (
    <div className="bg-gradient-to-tl from-warm-gray-900 via-black text-gray-900 to-black justify-between">
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
          <div className="pt-8 pb-8 dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </main>
      </div>
    </div>
  )
}
