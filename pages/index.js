import { useEffect, useState } from 'react'

var player

export default function Home() {
  const [initialized, setInitialized] = useState(false)
  const [playerWrapper, setPlayerWrapper] = useState({})
  useEffect(() => {
    if (!initialized) {
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
      setInitialized(true)
      console.log('Initializing')
      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      window.onYouTubeIframeAPIReady = function () {
        player = new window.YT.Player('player', {
          width: 640,
          height: 390,
          videoId: tmpVideoIds[Math.floor(Math.random() * tmpVideoIds.length)],
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
  //   }, 2e3)
  //   return () => clearInterval(interval)
  // })

  function markTime() {
    console.log('here')

    // if (typeof player !== 'undefined') {
    //   console.log(player.getCurrentTime())
    // }
  }

  function handlePlayerReady() {
    console.log('Player Ready')
  }

  function handlePlayerStateChange() {
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
