import React, { useState } from 'react';

const Photo = ({ photos }) => {
  const [ images, setImages ] = useState({});
  const [ active, setActive ] = useState(false);

  const onView = (data) => {
    setActive(true);
    setImages(data);
  }

  return (
    <>
      <div className="photo grid grid-col-2">
        {photos.map((photo) => {
          return (
            <div key={photo.id} onClick={() => onView(photo)}>
              <img className='img' src={photo.source} alt="Images" />
            </div>
          )
        })}
      </div>

      <div className={`overlay ${active ? 'is-active' : ''}`} onClick={() => setActive(false)}>
      </div>
      <div className={`modal ${active ? 'is-active' : ''}`} onClick={() => setActive(true)}>
        <img className='img' alt="Alt" src={images.source} />
      </div>

    </>
  )
}

export default Photo;