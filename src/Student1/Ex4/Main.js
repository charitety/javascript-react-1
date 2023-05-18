import React from 'react'
import './Main.css'
import { useState } from 'react'
import {Tweet} from './Tweet'
import {Button} from './Button'


export const Main = () => {
  return (
    <div className="Tweets">

      <Tweet message="Tweet Storm" color="grey" />
      <Tweet message="It's payday!!!" color="green"/>
      <Tweet message="I just bought a new car!" color="yellow" />
      <Tweet message="I just smashed my new car." color="red" />

      <Button onClicked={Button}/>
    </div>
  )
}