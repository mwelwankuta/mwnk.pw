import Timeline from '@/components/Timeline'
import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'

export default function About() {
  return (
    <Container title="About – Daniel M. Matongo">
      <div className="flex flex-col justify-center items-start px-2 mx-auto mb-10">
        <h1 className="pt-6 pb-8 space-y-2 md:space-y-5">
          <PageTitle>About Me</PageTitle>
        </h1>
        <div className="mb-8 leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Daniel. I'm a developer, writer, and the creator of&nbsp;
            <a href="https://github.com/noirlinux" target="_blank" rel="noopener noreferrer">
              Noir Linux
            </a>
            .
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  )
}
