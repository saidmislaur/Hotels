import React from 'react'
import Form from '../components/Form'

import '../App.scss'

const Auth = ({setIsLogged, isLogged}) => {
  return (
    <div className="Auth">
      <Form setIsLogged={setIsLogged} isLogged={isLogged}/>
    </div>
  )
}

export default Auth