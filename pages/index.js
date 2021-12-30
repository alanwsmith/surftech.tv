import { useEffect, useState } from 'react'

var player

export default function Home() {
  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      console.log('Initializing')
      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      window.onYouTubeIframeAPIReady = function () {
        player = new window.YT.Player('player', {
          width: 640,
          height: 390,
          videoId: 'M7lc1UVf-VE',
          events: {
            onReady: handlePlayerReady,
            onStateChange: handlePlayerStateChange,
          },
        })
      }
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }
  }, [initialized])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('here')
      console.log(player.getCurrentTime())
    }, 2e3)
    return () => clearInterval(interval)
  })

  function handlePlayerReady() {
    console.log('Player Ready')
  }

  function handlePlayerStateChange() {
    console.log('state change')
    console.log(player.getCurrentTime())
  }

  if (typeof window !== 'undefined') {
    localStorage.setItem('asdf', 'qweqweqw')
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="videoWrapper_16x9">
          <div id="player"></div>
        </div>
      </div>
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
