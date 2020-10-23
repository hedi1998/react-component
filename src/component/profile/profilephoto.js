import React from 'react'
import image from '../../images/photo.jpg'
import { animations } from 'react-animation'



const profilephoto = () => {
    return (
        
            <div style={{animation : animations.fadeIn}}>
                <img src={image}/>
             </div>
            
        
    )
}

export default profilephoto
