import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Map = () => {
    const data=useSelector((state) => state.Map.data)
    const name=useSelector((state) => state.Map.userId)
    // console.log(name)
    // console.log(data)
  var cityname = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCNC_IWghKRV-5CaatCR1jw5a0io3iXpJk&q=${data.name}`
  console.log(cityname)
  return (
    <div>
      <iframe
        style={{
          width: '400',
          height: '300',
          id: 'gmap_canvas',
          style: 'border: 0',
          loading: 'lazy',
        }}
        src={cityname}
      ></iframe>
    </div>
  )
}

export default Map
