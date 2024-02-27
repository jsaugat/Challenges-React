import React from 'react'

function Video({videoSrc}) {
  return (
    <div>
      <video src={videoSrc} loop autoPlay muted controls />
    </div>
  )
}

export default Video
