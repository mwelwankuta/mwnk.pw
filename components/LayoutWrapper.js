import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="w-full sticky z-20 top-0 flex items-center justify-between py-4  border-none bg-gradient-to-tl from-warm-gray-900 via-black to-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100">
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 sm:py-2 xl:max-w-3xl xl:px-0 flex items-center justify-between">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium sm:p-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <ThemeSwitch />
            </div>
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
