import React, { Component } from 'react'
import { Image } from 'react-native'

// UI component used in chatscreen
const NotificationIcon = () => (
   <Image style={{
       width: 20, 
       height: 20,
       marginLeft: 10,
    }} source = {require('./../assets/icons8-alarm.png')} />
)


export default NotificationIcon;