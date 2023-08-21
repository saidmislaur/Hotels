import React from 'react'

import "./aside.scss"

const LocationFilter = ({setLocation, location}) => {

  // const [value, setValue] = React.useState('')

  const onSearch = (e) => {
    e.preventDefault()
    alert(location)
  }
  return (
    <div className='locationFilter'>
        <div className="locationFilter_location">
          <form action="">
            <h2>Локация</h2>
            <input 
              type="text"
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={(e) => onSearch(e)}>Найти</button>
          </form>
        </div>
        {/* <div className="locationFilter_check-in">
          <h2>Дата заселения</h2>
          <input type="text" />
        </div>
        <div className="locationFilter_amountDays">
          <h2>Количество дней</h2>
          <input type="text" />
        </div> */}
    </div>
  )
}

export default LocationFilter