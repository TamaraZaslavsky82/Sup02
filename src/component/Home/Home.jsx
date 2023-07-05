import React from 'react'
import Description from './Description'
import Nav from '../Nav/Nav.jsx'
import Profile from '../Profile/Profile'

export default function Home() {
  return (
    <div>
      <Nav />
      <Description/>
      <Profile/>
    </div>
  )
}
