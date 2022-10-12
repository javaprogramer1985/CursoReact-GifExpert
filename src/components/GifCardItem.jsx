import React from 'react'

export const GifCardItem = ({title,url,id}) => {
  return (  
    <div className='card'>
      <img src={url} alt={title}></img>
      <p>{title}</p>      
    </div>
  )
}
