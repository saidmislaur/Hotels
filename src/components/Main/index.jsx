import React from 'react'

import "./main.scss"

import Card from '../Card/Card'
import Slide from '../Slide'
const Main = ({hotels, onAddFavorite, like, favorites}) => {

  console.log(like)

  return (
    <div className='main'>
      <div className="main_header">
        <ul>
          <li>Отель</li>
          <li>Москва</li>
        </ul>
        <span>07 июля 2020</span>
      </div>
      <div className="main_slide">
      <Slide />
      </div>
      <div className="main_favoritesCount">
        <span>Добавлено в Избранное:<b>3</b>отеля</span>
      </div>
      <>
        {hotels.map((items) => (
          <Card 
            key={items.id}
            id={items.id} 
            {...items}
            img={true}
            onAddFavorite={(el) => onAddFavorite(el)}
            onLike={like}
            favorites={favorites}
          />
        ))}
      </>
    </div>
  )
}

export default Main