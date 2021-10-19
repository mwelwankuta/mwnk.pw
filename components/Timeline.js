import { useState } from 'react'

const Divider = () => {
  return <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
}

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  )
}

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{props.title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  )
}

const FullTimeline = () => (
  <>
    <Year>2019</Year>
    <ul>
      <Step title="Started University Again🎓">
        This was my second time going back to University after dropping out of medical school. In
        favour of of Computer Science.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Started at Golden Grace">
        This was my first real job and the first time I ever did volunteer work on such a scale.
      </Step>
    </ul>
    <Divider />
    <Year>2012 - 2014</Year>
    <ul>
      <Step title="Began Ethical Hacking">
        Between the years 2012 - 2015 I was a very strong presence in the tech space of my country,
        practicing and teaching ethical hacking.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="Moved To New High School">
        After much moving about, I finally settled at Parklands High School
      </Step>
      <Step title="Started Learning Basic Programming">
        From online videos and articles Ipicked up some basic Programming skills in shell, perl and
        ruby.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
)

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Joined Microverse as a Student">
          In pursuit of knowledge I joined the online coding school Microverse.
        </Step>
        <Step title="Moved out of Lusaka 💯">
          I currently live in Chongwe some 40km away from the city and 70km away from home.
        </Step>
        <Step title="Mastering Technologies 📈">
          This year has been my largest gathering of knowledge since I first started learning
          programming. I've learnt Ruby, React Native, React Js and Vanilla Js this year alone.
          additionally over the last 4 years I've learnt Go, Java, C, Shell, R, Haskell and a some
          applicable Rust.
        </Step>
      </ul>
      <Divider />
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </>
  )
}
