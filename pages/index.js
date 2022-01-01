import { useEffect, useState } from 'react'

var player

export default function Home() {
  const [initialized, setInitialized] = useState(false)
  const [playerReady, setPlayerReady] = useState(false)
  const [tmpVideoIds, setTmpVideoIds] = useState([
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
    'pA5BMSFBO9c',
    '92ZJcxJgmmE',
    '47OdZ2gqPtU',
    'RT-npV1JRKE',
    'TO4-Px3T9Zs',
    'iGOEKtYfEdY',
    'GqO70f8dffI',
    'XkpDwl5n7pg',
    'dhBf0PvA9gc',
    'ECa_MgZ0LrM',
    'Cv3rQYgM-1I',
    'YEOoJZ13JtI',
    'fTtA9qXkNAk',
    'g6neBwgUds4',
    '9aBpF0-JH7A',
    '19Vy5Yi6fNI',
    '13HIqdtfxrM',
    'cUKq6uKc-60',
    'aDAkU1S2JYk',
    'VpvmLxO3Ys0',
    'BJG-c65XkEU',
    '0ikyjpaUDFQ',
    '-9Veoch50Bg',
    'AvG7czmeQfs',
    'UURvPeczxJI',
    '8lSibEWWQiw',
    'rE04qkKFW00',
    'EqO4TcNLjl0',
    'v2RmxZ9Vcps',
    'vtoXyxcfmUo',
    'TqWBsgBUc0o',
    'cKMO0aeh8GI',
    'JrORpCkuK3g',
    '_qnuzlTyOA8',
    'OW9mOwEmuec',
    'gv0Q2u2hGgU',
    'NJwxOeYYcqA',
    'BrT3AO8bVQY',
    'gLQWKUh72aI',
    '5nhVVRqEqhc',
    'E0fU5gaA3kE',
    '8v2vTpRS-V4',
    'xWchfTWh2Ts',
    'nf4j02kQr9k',
    '9RvGlN-PMB8',
    'rSiE2Bfj6T8',
    'Lx8nkS3VrYo',
    'i6WKne5Pvao',
    'hr65_ucoCCY',
    'RWqY0oFznVc',
    'YaCN7_5Z7s4',
    'i084ps0rias',
    'cCJy6hzAJQQ',
    '3sU557ZKjUs',
    'ubDPNITd_NY',
    'D81yl6_kHEM',
    '8k_DEeIZpIc',
    'QHkpGtDySqM',
    'a31BUlx-EXc',
    'iRgkdWnTbF0',
    'P2Lz4Aj1EMI',
    '428ejtNbd5A',
    'E-2y1qHQvTg',
    'ZnXKmODEFHA',
    'ZUd3DYPyHR4',
    'wm5A76OXTrE',
    'QaUT5VnxsLM',
    'xBfiYy3vECo',
    't7Us0sWUpRQ',
    'hzRBBD3nPms',
    '26jVysJHB-s',
    'kETDOnnt5sc',
    'OdbVCvPjRGg',
    '7Dai8SJgLkM',
    'E6OxStwelWo',
    '5Hg18QxU6mA',
    'sazsWmP2d3o',
    'p_CqEYHbc3k',
    '62AMy1QIpzk',
    'wm-az9nQJvg',
    'i6yEUSNF4S4',
    'xDfk5s4p1mY',
    'tTVNTlCdOhY',
    '_f-oX7ca3Ik',
    'SnFOEhi0ym0',
    'w50mhBcHep0',
    'F-2aqz2OL8g',
    'KTIl1MugsSY',
    'ZGFlt2sBjsQ',
    'R48KFAyjFGc',
    'lkmpaD_BRUc',
    'z47E_3KfLJ0',
    'e3cF-dvNaiM',
    'rJDyfaAc8lc',
    'DOYGsXjX-Zs',
    '8sbU6aqb4g0',
    'KHojnWHemO0',
    'oneGCBiPK_Q',
    'a2fjC_z-_p0',
    '9vc-I9rvGsw',
    'f2mMOiCSj5c',
    'IHRh6XU7cQw',
    'ramjaM2qakM',
    'CFWuwNDOnIo',
    'Z1mZ9wSi4Bo',
    '1YWDcGTVkyM',
    '-T0Gov8SHHQ',
    'dyzxPK21le0',
    '9dT0FSH-aGQ',
    'aPOMcRp7uVU',
    'VYs7BrLXeMU',
    'URYPpY3SgS8',
    '6nVXxrqVxgI',
    'cQJZaWe8weA',
    'owcvg2YZ7Y8',
    'TnZ7jMFCa4Y',
    'fmVbtHMHEZc',
    'xBE8qdAAj3w',
    'GIF3LaRqgXo',
    'aTEDCotcn20',
    'I37hPmG0l4o',
    'RynQWzvPHS0',
    'MpFZUshKypk',
    'e3Nh350b6S4',
    '0YOaYUYd2-s',
    'ZBe--JjrEL8',
    'bwNY-pd8Ups',
    'gdSlcxxYAA8',
    'Jmi2bxkOl0I',
    'xmob0Lox_FQ',
    'AmHE0kZhLIQ',
    '_IDDT1_LfY0',
    '7xSA0cB97Fw',
    'FjSjJI44JxY',
    'UgqLi1itWmk',
    'tzwTnG4ZcM8',
    'yI0BtEzdGtw',
    'Kde8jw11xFY',
    '_3Si3DnVeYM',
    'dqqMFpR7sMk',
    'RRtqIagk93k',
    'li3u8AEwlh0',
    '0efFjz2tCno',
    'rcBpQ9fwNTY',
    'TognxyDCHlI',
    'VGxze7xMYJs',
    'sXpbONjV1Jc',
    'cQqEFNVPD1s',
  ])
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
          },
        })
      }
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }
  }, [initialized, tmpVideoIds])

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

  function playNextVideo() {
    const newVideo = tmpVideoIds[Math.floor(Math.random() * tmpVideoIds.length)]
    player.loadVideoById(newVideo)
    localStorage.setItem('activeVideo', newVideo)
    console.log(`Switching to video: ${newVideo}`)
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1>SurfTech.tv</h1>
        <p>A random tech video to watch without having to think about it</p>
        <p>It&apos;ll also pick up where you left off when you come back</p>
        <div className="max-w-prose mx-auto border-2 border-blue-200 bg-black shadow-md overflow-hidden">
          <div className="videoWrapper_16x9">
            <div id="player"></div>
          </div>
        </div>
        <button
          onClick={() => {
            playNextVideo()
          }}
        >
          Play Another Video
        </button>
      </div>
    </>
  )
}
