import React from 'react';
import axios from 'axios'
import  {useNavigate}  from 'react-router-dom'

import '../App.scss';

import Main from '../components/Main';

import LocationFilter from '../components/Aside/locationFilter.jsx'
import Favorites from '../components/Aside/favorites'


function Home ({setIsLogged}) {

  const navigate = useNavigate()

  const [location, setLocation] = React.useState('Москва')
  const [listsHotels, setListsHotels] = React.useState([])

  const [favorites, setFavorites] = React.useState([])

  async function fetchData() {
    const { data: { results } } = await axios.get(
      `http://engine.hotellook.com/api/v2/lookup.json?query=${location.toLowerCase()}&lang=ru&lookFor=both&limit=3`);
    setListsHotels(results.hotels.map((hotel) => ({
      ...hotel, isFavorite: false
    })))
  }
  React.useEffect(() => {
    const makeUniq = (arr) => {
      return arr.filter((el, id) => arr.indexOf(el) !== id);
    }
    makeUniq(favorites);
    
    fetchData();
  }, [])

  
  const onAddFavorite = async (el) => {
    try {
      const hotels = listsHotels.map((prev) => Number(prev.id) === Number(el.id) ? {
        ...prev, isFavorite: !prev.isFavorite
      } : prev)
      setListsHotels(hotels)
      setFavorites(makeUniq(favorites.find((fav) => fav.id === el.id) ? favorites.filter((favEl) => favEl.id !== el.id) : [{...el, isFavorite: true} , ...favorites]))
      console.log(listsHotels)
      console.log(favorites)
      console.log(el)
    } catch (error) {
      alert('error')
    }
  }

  const makeUniq = (arr) => {
    return arr.filter((el, id) => arr.indexOf(el) === id);
  }


  const logout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false)
    navigate('/login')
  }


  return (
    <div className="Home">
      <header className="header">
          <h1>Simple Hotel Check</h1>
          <div onClick={logout} className="goOut">
            <span>выход</span>
            <img src="./go-out.svg" alt="" />
          </div>
      </header>
      <div className="container">
        <div className="aside">
          <LocationFilter 
            setLocation={setLocation}
            location={location}
            fetchData={fetchData}
            />
          <Favorites 
            favorites={favorites} 
            onAddFavorite={onAddFavorite} 
          />
        </div>
        <Main 
          location={location}
          hotels={listsHotels} 
          onAddFavorite={onAddFavorite} 
          favorites={favorites}
        />
      </div>
    </div>
  );
}

export default Home;