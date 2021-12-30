export default function Home() {
  const videoList = ['kYAtt3CUN-Y', 'JDdR94w8-7Q']

  function randomItem(theArray) {
    const randomNumber = Math.floor(Math.random() * theArray.length)
    return theArray[randomNumber]
  }

  return (
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
  )
}
