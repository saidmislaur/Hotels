import React from 'react'

import "./aside.scss"

const LocationFilter = () => {
  return (
    <div className='locationFilter'>
        <div className="locationFilter_location">
          <h2>Локация</h2>
          <input type="text" />
        </div>
        <div className="locationFilter_check-in">
          <h2>Дата заселения</h2>
          <input type="text" />
        </div>
        <div className="locationFilter_amountDays">
          <h2>Количество дней</h2>
          <input type="text" />
        </div>
        <button>Найти</button>
    </div>
  )
}

export default LocationFilter