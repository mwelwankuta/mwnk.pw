import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useEffect, useState } from 'react'

const useIsScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(true)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrollTop(false)
    } else {
      setIsScrollTop(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return isScrollTop
}

const LayoutWrapper = ({ children }) => {
  const isScrollTop = useIsScrollTop()
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header
          className={`w-full sticky z-20 top-0 flex items-center justify-between py-4  ${
            isScrollTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800'
          } bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
        >
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
