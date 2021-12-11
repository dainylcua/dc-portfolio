const Nav = () => {
  return(
    <nav className="sticky top-0 z-50 flex flex-row items-center w-full h-16 mx-auto bg-gray-100 blog-shadow-dreamy">
      <div className="flex w-full mx-auto text-xl lg:w-3/5 md:text-3xl justify-evenly">
          <a className="transition ease-in-out hover:text-blue-400" href="#about">about</a>
          <a className="transition ease-in-out hover:text-blue-400" href="#projects">projects</a>
          <a className="transition ease-in-out hover:text-blue-400" href="#contact">contact</a>
      </div>
    </nav>
  )
}

export default Nav