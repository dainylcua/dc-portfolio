const Nav = () => {
  return(
    <nav className="sticky top-0 flex flex-row items-center w-full h-16 mx-auto bg-gray-100 blog-shadow-dreamy">
      <div className="flex w-full mx-auto text-xl md:w-3/5 md:text-3xl justify-evenly">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
      </div>
    </nav>
  )
}

export default Nav