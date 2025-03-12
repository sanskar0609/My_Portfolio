import React from 'react'
import "./Card.css"
import mern from '../../assets/images/mern.png'
function Card({ title, image, url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
          <img src={image} alt={title} />
        </div>
      </div>
    </a>
  );
}

export default Card
