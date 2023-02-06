import React from 'react'
import './RoverPhotos.css'

function PhotoList({ photos }) {
  return (
  <div className='photo-list'>
    {photos.map(photo => {
        return (
            <div key={photo.id} className="photo-item">
                <img src={photo.img_src} />
                </div>
        )
    })}
    </div>
  )
}

export default PhotoList