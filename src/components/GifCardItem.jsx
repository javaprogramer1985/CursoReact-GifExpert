import React from 'react';
import { PropTypes } from 'prop-types';

export const GifCardItem = ({title,url,id}) => {
  return (  
    <div className='card'>
      <img src={url} alt={title}></img>
      <p>{title}</p>      
    </div>
  )
}

GifCardItem.propTypes = {
  title : PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}