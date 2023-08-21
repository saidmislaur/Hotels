import React from 'react';
import axios from 'axios'
import  {useNavigate}  from 'react-router-dom'

import '../App.scss';

import Main from '../components/Main';

import LocationFilter from '../components/Aside/locationFilter.jsx'
import Favorites from '../components/Aside/favorites'


function Home ({setIsLogged}) {

  const navigate = useNavigate()

  const [location, setLocation] = React.useState('новосибирск')
  const [listsHotels, setListsHotels] = React.useState([])

  const [favorites, setFavorites] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const { data: { results } } = await axios.get(
        `http://engine.hotellook.com/api/v2/lookup.json?query=${location.toLowerCase()}&lang=ru&lookFor=both&limit=3`);
      setListsHotels(results.hotels.map((hotel) => ({
        ...hotel, isFavorite: false
      })))
    }
    fetchData();
  }, [])

  
  const onAddFavorite = async (el) => {
    try {
      const hotels = listsHotels.map((prev) => Number(prev.id) === Number(el.id) ? {
        ...prev, isFavorite: !prev.isFavorite
      } : prev)
      setListsHotels(hotels)
      setFavorites(...hotels, hotels.filter((favEl) => favEl.isFavorite === true))
      console.log(listsHotels)
      console.log(el)
    } catch (error) {
      alert('error')
    }
  }


  const onSearch = async () => {
    alert('ok')
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
            />
          <Favorites 
            favorites={favorites} 
            onAddFavorite={onAddFavorite} 
          />
        </div>
        <Main 
          hotels={listsHotels} 
          onAddFavorite={onAddFavorite} 
          favorites={favorites}
        />
      </div>
    </div>
  );
}

export default Home;