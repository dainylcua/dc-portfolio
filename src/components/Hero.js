const Hero = () => {
  return(
    <div className="flex flex-col justify-center text-center text-white bg-blue-400 h-96">
      <div className="flex flex-col w-3/5 mx-auto text-3xl md:text-4xl text">
        <div className="text-6xl md:text-8xl drop-shadow-lg">dainyl cua</div>
        <div>hi, i make code!</div>
        <div className="hidden md:block">scroll down to see</div>
        <div className="md:hidden">swipe up to see</div>
      </div>
    </div>
  )
}

export default Hero