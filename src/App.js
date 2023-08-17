import React from 'react';
import {Routes, Route, Link, redirect, Navigate} from 'react-router-dom';

import Home from './Pages/Home'
import Auth from './Pages/Auth'
import './App.scss';


function App() {

  const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged') ?? false)

    console.log(localStorage)
    // if (isLogged) {
    //   redirect("/");
    // } else {
    //   redirect("/login");
    // }

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home/> }/>
        <Route path='/login' element={<Auth /> } /> */}
        <Route path="/" element={isLogged ? <Home setIsLogged={setIsLogged}/> : <Navigate to='/login'/>} />
        <Route path="/login" element={isLogged ? <Navigate to="/" /> : <Auth setIsLogged={setIsLogged}/>} />
      </Routes>
    </div>
  );
}

export default App;
