import { useState, useEffect } from 'react'

const Nav = (props) => {
  

  return(
    <nav className="flex justify-between w-full h-10 mx-auto">
      <div className="text-2xl">
        logo
      </div>
      <div className="flex">
        <div>about</div>
        <div>projects</div>
        <div>contact</div>
      </div>
    </nav>
  )
}

export default Nav