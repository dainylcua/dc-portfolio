import { useState, useEffect } from 'react'

const Nav = (props) => {
  

  return(
    <nav className="items-center w-full h-16 mx-auto bg-indigo-600">
      <div className="flex w-3/5 mx-auto text-3xl justify-evenly">
          <div>about</div>
          <div>projects</div>
          <div>contact</div>
      </div>
    </nav>
  )
}

export default Nav