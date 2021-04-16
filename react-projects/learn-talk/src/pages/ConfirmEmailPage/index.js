import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom'
import useCountDown from 'react-countdown-hook'
import { useSelector } from 'react-redux'

import Constant from '../../utilities/Constant'
import Validate from '../../utilities/Validate'

const ConfirmEmailPage = () => {
  const [error, setError] = useState('')
  const [data, setData] = useState('')

  const [isLogin, setLogin] = useState('')

  const [otpArr, setOTP] = useState([])
  const [code1, setCode1] = useState('')
  const [code2, setCode2] = useState('')
  const [code3, setCode3] = useState('')
  const [code4, setCode4] = useState('')
  const [code5, setCode5] = useState('')
  const [code6, setCode6] = useState('')

  const inputE1 = useRef(null)
  const inputE2 = useRef(null)
  const inputE3 = useRef(null)
  const inputE4 = useRef(null)
  const inputE5 = useRef(null)
  const inputE6 = useRef(null)

  const initialTime = 30 * 1000
  const interval = 1000
  const [timeLeft, {start}] = useCountDown(initialTime, interval)
  useEffect(() =>
  {
    start()
  }, [])

  const restart = useCallback(() =>
  {
    const newTime = 30 * 1000
    start(newTime)
  }, [])

  useEffect(() =>
  {
    const agent = window.navigator.userAgent
    if (agent.indexOf('Android') > -1) {
      window.sendActionToNative('show_keyboard')
      window.ee.addListener('show_keyboard', showKeyboard)
      window.KingIDSdk.onShowKeyBoard()
      return(() => {window.KingIDSdk.onHideKeyboard()})
    }
  })

  const showKeyboard = (callback) =>
  {
    if (callback === -1 || callback === '-1') {
      setOTP(otpArr => otpArr.slice(0, otpArr.length -1))
    }
  }


  return <h1>ConfirmEmailPage</h1>
}

export default ConfirmEmailPage
