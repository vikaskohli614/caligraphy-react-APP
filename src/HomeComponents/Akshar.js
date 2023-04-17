import React from 'react'
import Celebrating from './Celebrating'
import Eventsandfestival from './Eventsandfestival'
import Event_schedule from './Event_schedule'
import Gallery from './Gallery'
import Mahotsav from './Mahotsav'
import Mahotsav_Image from './Mahotsav_Image'
import Schedule from './Schedule'
import Sponsors from './Sponsors'
import Team from './Team'

export default function Akshar() {
  return (
    <div>
        <Mahotsav_Image/>
        <Mahotsav/>
        <Schedule/>
        <Eventsandfestival/>
        <Team/>
        <Celebrating/>
        <Event_schedule/>
        <Sponsors/>
        <Gallery/>
    </div>
  )
}
