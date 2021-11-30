import { useState, useEffect } from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Header = (props) => {
  

  return(
    <div className="bg-indigo-600 h-60">
      <div className="flex flex-col w-3/5 mx-auto">
        <Nav />
        <Hero />
      </div>
    </div>
  )
}

export default Header