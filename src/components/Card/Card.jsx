import React from 'react'

import "./card.scss"

const Card = ({label, onAddFavorite, img, id, isFavorite}) => {

  const [isLike, setIsLike] = React.useState(false)

  const obj = {id, parentId: id, label}

  const onLikeAdd = () => {
    onAddFavorite(obj)
  }

  return (
    <div key={id} className="card">
      <div className="card_main">
        {img && 
         <div className="card_icon">
            <img src="./house.svg" alt="#" />
          </div>
        }
      
      <div className="card_title">
        <h1>{label}</h1>
        <span>7 июля 2020</span> - <span>1 день</span>
        <div className="card_grades">
          <img src="./grades.svg" alt="#" />
        </div>
      </div>
      </div>
      <div className="card_info">
        <img onClick={(el) => onLikeAdd(el)} src={isFavorite ? './like.svg' : './isLike.svg'} alt="#" />
        <span>Price: <b>23 924 ₽</b></span>
      </div>
    </div>
  )
}

export default Card