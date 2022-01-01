if (typeof document !== 'undefined') {
  var tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

var player

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  })
}

function onPlayerReady(event) {
  event.target.playVideo()
}

var done = false
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000)
    done = true
  }
}
function stopVideo() {
  player.stopVideo()
}

export default function Home() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('asdf', 'qweqweqw')
  }
  return (
    <>
      <div id="player"></div>
      <div>here</div>
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
