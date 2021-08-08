import React from 'react'

import { getPrettyDate } from '../utils'

import './header.css'

const Header = () => {
  const crntDate = getPrettyDate()

  return (
    <div className='header'>
      {crntDate}
    </div>
  )
}

export default Header
