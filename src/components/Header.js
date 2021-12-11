import Nav from './Nav'
import Hero from './Hero'

const Header = () => {
  return(
    <div className="bg-gray-900 h-60">
      <div className="flex flex-col mx-auto lg:w-3/5">
        <Nav />
        <Hero />
      </div>
    </div>
  )
}

export default Header