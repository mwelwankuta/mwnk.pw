import CustomLink from '@/components/CustomLink'
import React from 'react'

interface Props {
  href: string
  title: string
  children: React.ReactNode
}

const InternalCard: React.FC<Props> = ({ href, title, children }) => {
  return (
    <CustomLink
      href={href}
      title={title}
      className=" w-full flex flex-col justify-between row-span-1 p-4 border-2 border-solid rounded-lg border-gray-200 dark:border-gray-800 transform hover:border-primary-600 dark:hover:border-primary-400"
    >
      <h3 className="text-lg font-bold leading-4 tracking-tight">{title}</h3>
      <div className="pt-4 text-sm prose text-gray-800 max-w-none dark:text-gray-200 flex items-center gap-1">
        {children}
      </div>
    </CustomLink>
  )
}

export default InternalCard
