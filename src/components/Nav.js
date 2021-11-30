import { useState, useEffect } from 'react'

const Nav = () => {
  return(
    <nav className="items-center w-full h-16 mx-auto bg-indigo-900">
      <div className="flex w-3/5 mx-auto text-3xl justify-evenly">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
      </div>
    </nav>
  )
}

export default Nav