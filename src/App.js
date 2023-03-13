import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from './store/auth'
import ComposeMail from './views/private/ComposeMail'

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const stayLogin = () => {
    const token = localStorage.getItem('token')
    if (!!token) {
      dispatch(authActions.login(token))
    }
    if (!isAuthenticated) {
      navigate('/');
    }
  }

  useEffect(() => {
    stayLogin();
  }, [])

  return (
    <>
      <ComposeMail />
    </>
  )
}

export default App