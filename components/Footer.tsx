import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center pb-8">
        <nav className="flex flex-col justify-between w-full max-w-2xl gap-4 pb-8 mx-auto mt-4 xl:max-w-3xl sm:gap-0 sm:flex-row">
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Portfolio</p>
            <Link className="text-sm hover:text-primary-600 dark:hover:text-primary-400" href="/">
              Home
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Writing</p>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags"
            >
              Tags
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Social</p>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.github}
            >
              GitHub
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.linkedin}
            >
              LinkedIn
            </Link>
          </div>
        </nav>
        <div className="flex justify-between w-full">
          <div className="w-full truncate">
            <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>Copyright</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
              <Link
                className="text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                href="/"
              >
                {siteMetadata.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
