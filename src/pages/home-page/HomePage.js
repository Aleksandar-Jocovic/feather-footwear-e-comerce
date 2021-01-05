import React from 'react';

import HomeMenu from '../../components/home-menu/HomeMenu'

import './home-page.styles.css';

function HomePage(props) {
  console.log(props)
  return (
    <div className="home-page">
      <HomeMenu />
    </div>
  )
}

export default HomePage
