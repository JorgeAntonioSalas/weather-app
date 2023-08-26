import React from 'react'
import Video from '../media/background.mp4'

const Background = () => {
    return (
        <video className="background__video" loop muted autoPlay>
            <source src={Video} type="video/mp4" />
        </video>
    )
}
export default Background


