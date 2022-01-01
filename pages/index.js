import { useEffect, useState } from 'react'

var player

export default function Home() {
  const [initialized, setInitialized] = useState(false)
  const [playerReady, setPlayerReady] = useState(false)
  const tmpVideoIds = [
    'kYAtt3CUN-Y',
    'JDdR94w8-7Q',
    'JtwHtfFe6AI',
    '6JNwK6hEneg',
    'f7s8_PGpVT0',
    'R-YX_7-7dm0',
    'lQLsswJHa_c',
    'DC9032_nkyc',
    'Jk75JtXACL8',
    'woXnRQR8dQ4',
    'ELdFoIYTBL8',
  ]
  useEffect(() => {
    if (!initialized) {
      console.log('Initializing...')
      setInitialized(true)
      let activeVideo = localStorage.getItem('activeVideo')
      if (activeVideo !== null) {
        console.log(`Reloading activeVideo: ${activeVideo}`)
      } else {
        activeVideo =
          tmpVideoIds[Math.floor(Math.random() * tmpVideoIds.length)]
        localStorage.setItem('activeVideo', activeVideo)
        console.log(`Setting activeVideo to: ${activeVideo}`)
      }

      // let startSeconds = localStorage.getItem(`startSecondsFor_${activeVideo}`)
      // if (startSeconds === null) {
      //   startSeconds = 0
      // }

      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      window.onYouTubeIframeAPIReady = function () {
        player = new window.YT.Player('player', {
          width: 640,
          height: 390,
          videoId: activeVideo,
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     markTime()
  //   }, 4e3)
  //   return () => clearInterval(interval)
  // })

  // // Add this back in if you need to keep track of
  // // the video progress outside of what youtube does
  // function markTime() {
  //   if (playerReady) {
  //     // TODO: Update the local storage with the time
  //     // subtract 10 seconds so you get a little buffer when
  //     // starting again
  //     const currentTime = parseInt(player.getCurrentTime(), 10) - 10
  //     const minTime = 10
  //     if (currentTime > minTime) {
  //       console.log(`Updating time to: ${currentTime}`)
  //       localStorage.setItem(
  //         `startSecondsFor_${localStorage.getItem('activeVideo')}`,
  //         currentTime
  //       )
  //     } else {
  //       console.log(
  //         `Not updating time because ${currentTime} is less than ${minTime} seconds`
  //       )
  //     }
  //   }
  // }

  function handlePlayerReady() {
    console.log('Player Ready')
    setPlayerReady(true)
  }

  function handlePlayerStateChange() {
    // TODO: Fire a time update here.
    console.log('state change')
    // console.log(player.getCurrentTime())
  }

  if (typeof window !== 'undefined') {
    localStorage.setItem('asdf', 'qweqweqw')
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1>SurfTech.tv</h1>
        <div className="max-w-prose mx-auto border-2 border-blue-200 bg-black shadow-md overflow-hidden">
          <div className="videoWrapper_16x9">
            <div id="player"></div>
          </div>
        </div>
        <p>Refresh to get a new random tech talk video</p>
      </div>
    </>
  )
  const videoList = ['kYAtt3CUN-Y', 'JDdR94w8-7Q']

  function randomItem(theArray) {
    const randomNumber = Math.floor(Math.random() * theArray.length)
    return theArray[randomNumber]
  }
}
