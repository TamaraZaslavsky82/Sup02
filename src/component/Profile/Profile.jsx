import React from 'react'
import { profiles } from '../../data'
import styles from "./Profile.module.css"

export default function Profile() {
  return (
    <div className={styles.container}>
      {profiles.map((profile) => (
        <div  className={styles.card} key = {profile.id}>
        <img className={styles.img} src={profile.avatar} alt= "avatar"></img>
        <h2 className={styles.title}>{profile.name}</h2>
        <p className={styles.house}>House: {profile.house}</p>
        </div>
  ))}
    </div>
)}
