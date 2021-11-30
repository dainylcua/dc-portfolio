import { useState, useEffect } from 'react'

const Hero = (props) => {
  return(
    <div className="flex flex-col justify-center h-screen text-center text-white bg-indigo-900">
      <div className="flex flex-col w-3/5 mx-auto text-3xl md:text-4xl text">
        <div className="text-6xl md:text-8xl drop-shadow-lg">dainyl cua</div>
        <div>hi, i make code</div>
        <div>scroll down to see!</div>
      </div>
    </div>
  )
}

export default Hero