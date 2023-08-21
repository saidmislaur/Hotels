import React from 'react'

import './aside.scss'

import Card from '../Card/Card'

const Favorites = ({favorites, onAddFavorite}) => {

  return (
    <div className='favorites'>
      <h2>Избранное</h2>
      <div className="favorites_sort">
        <button>
          Рейтинг
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M13.5 7.24264L12.4393 8.3033L9.25736 5.12132L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z" fill="black" fill-opacity="0.32"/>
          <path d="M13.5 10.8325L12.4393 9.77181L9.25736 12.9538L6.07538 9.77181L5.01472 10.8325L9.25736 15.0751L13.5 10.8325Z" fill="black" fill-opacity="0.32"/>
        </svg>
        </button>
        <button>
          Цена
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M13.5 7.24264L12.4393 8.3033L9.25736 5.12132L6.07538 8.3033L5.01472 7.24264L9.25736 3L13.5 7.24264Z" fill="black" fillOpacity="0.32"/>
            <path d="M13.5 10.8325L12.4393 9.77181L9.25736 12.9538L6.07538 9.77181L5.01472 10.8325L9.25736 15.0751L13.5 10.8325Z" fill="black" fill-opacity="0.32"/>
          </svg>
          </button>
      </div>
      <div className="favorites_lists">
        {favorites && favorites.map((items) => (
          <Card 
            {...items}
            key={items.id}
            img={false} 
            id={items.id}
            onAddFavorite={(el) => onAddFavorite(el)}
            favorites={favorites}
          />
          ))
        }
      </div>
    </div>
  )
}

export default Favorites