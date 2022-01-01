import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCounter(counter + 1), 3e3)
    console.log('wer')
    console.log(ReactPlayer.getCurrentTime)

    return () => clearTimeout(timer)
  })

  if (typeof window !== 'undefined') {
    localStorage.setItem('asdf', 'qweqweqw')
  }

  return (
    <>
      <div>{counter}</div>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </>
  )
  const videoList = ['kYAtt3CUN-Y', 'JDdR94w8-7Q']

  function randomItem(theArray) {
    const randomNumber = Math.floor(Math.random() * theArray.length)
    return theArray[randomNumber]
  }

  function testId(event, data) {
    console.log('I AM EHREREE')
    console.log(event.target.getCurrentTime())
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {randomItem(videoList)}
        <div className="videoWrapper_16x9">
          <iframe
            width="560"
            height="315"
            src={`http://www.youtube.com/embed/${randomItem(videoList)}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}
