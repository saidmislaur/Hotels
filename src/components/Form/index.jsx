import React from 'react'

import  {useNavigate}  from 'react-router-dom'

import './form.scss'

const Form = ({setIsLogged}) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [formValid, setFormValid] = React.useState(false)

  const navigate = useNavigate()

  React.useEffect(() => {
    if(emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const login = (e) => {
    e.preventDefault()

    localStorage.setItem('isLogged', true)
    setIsLogged(true)
    // navigate('/')
  }
  
  const emailHandler = (e) => {
    e.preventDefault()
    
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('некорректные данные')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 6) {
      setPasswordError('не менее 4 символов')
    } else {
      setPasswordError('')
    }
  }

  console.log(localStorage)

  return (
    <div className="form">
      <form action="" onSubmit={login}>
        <h1>Simple Hotel Check</h1>
        <label>логин</label>
        <input 
          type="text" 
          name="email"
          value={email}
          onChange={(e) => emailHandler(e)} 
        />
        {(emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <label>Пароль</label>
        <input 
          type="password" 
          name="password"
          value={password} 
          onChange={(e) => passwordHandler(e)}
        />
        {(passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
        <button disabled={!formValid}>Войти</button>
      </form>
    </div>
  )
}

export default Form