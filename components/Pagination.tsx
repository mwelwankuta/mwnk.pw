import Link from '@/components/Link'

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number
  currentPage: number
}) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  const prevPage = isFirstPage ? 1 : currentPage - 1
  const nextPage = isLastPage ? totalPages : currentPage + 1

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link href={`/page/${prevPage}`}>
          <a className="text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Prev
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href={`/page/${nextPage}`}>
          <a className="text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Next
          </a>
        </Link>
      </div>
    </div>
  )
}
