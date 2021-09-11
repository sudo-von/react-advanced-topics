import React from 'react'
import useImageSize from '@use-hooks/image-size'

const CommunityHook = () => {

  const url = 'https://myanimeth.files.wordpress.com/2014/08/screenshot-2014-08-14-14-15-24.png'
  const [width, height] = useImageSize(url)
  
  return (
    <div>
      <h2>DEMO of <span style={{ color: '#F44336' }}>@use-hooks/image-size</span></h2>
      <div>
        <img src={url} width={240}/>
        <div>Natural size: {width} x {height}</div>
      </div>
    </div>
  )
}

export default CommunityHook