import React from 'react'
import { profiles } from '../../data'

export default function Profile() {
  return (
    <div>
      {profiles.map((profile) => (
        <div key = {profile.id}>
        <img src={profile.avatar} alt= "avatar"></img>
        <h2>{profile.name}</h2>
        <p>House: {profile.house}</p>
        </div>
  ))}
    </div>
)}
