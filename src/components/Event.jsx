import React from 'react'

const Event = ({title, desc, location, imgSrc}) => {
  return (
    <div className='Event'>
      <h2>{title}</h2>
      <h3>{location}</h3>
      <img src={imgSrc} alt={title} />
      <p>{desc}</p>
    </div>
  )
}

export default Event