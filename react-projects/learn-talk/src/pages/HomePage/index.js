import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Validate from '../../utilities/Validate'
import Constant from '../../utilities/Constant'
import CustomScroll from '../../utilities/CustomScroll'

const HomePage = ({ location }) => {
  // GET STATE
 

  // MANAGEMENT LOCAL STATE
  const [account, setAccount] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState('')
  const [popUp, setPopUp] = useState(false)
  const [quickLogin, setQuickLogin] = useState(false)
  const [login, setLogin] = useState('')
  const [loading, setLoading] = useState(false)
  const [accCookie, setAccCookie] = useState(null)
  const [userInfoCookie, setUserInfoCookie] = useState({
    avatar: '',
    fullname: '',
    username: '',
  })

  // Handle Cookies
  useEffect(() => {
    if (accCookie) return handleAccCookie()
  }, [accCookie])
  const handleAccCookie = () => {
    if (!accCookie) {
      setError('Vui lòng nhập Số điện thoại/Email.')
      Validate.sendError(
        'login',
        '',
        window.location.href,
        Constant.API_BASE_URL + 'checkLoginInfo',
        '',
        '',
        'Vui lòng nhập Số điện thoại/Email.'
      )
      setLoading(false)
      return
    }
  }

  // OTHER EFFECT

  // OTHER COMPONENTS

  // 1. Button submit
  useEffect(() => {
    if (accCookie) handleAccCookie()
  }, [accCookie])
  const buttonContinue = useMemo(() => {
    if (loading) return loadingSpinner()
    return 'Tiếp tục'
  }, [loading])

  const loadingSpinner = () => {
    return (
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }

  // Loading - Spinner
  return <h1>Homepage</h1>
}

export default HomePage
