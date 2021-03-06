const Hero = () => {
  return(
    <div className="flex flex-col justify-center text-center text-white bg-blue-400 shadow-inner h-96">
      <div className="flex flex-col mx-auto text-3xl lg:w-3/5 md:text-4xl text">
        <div className="text-6xl md:text-8xl drop-shadow-lg">dainyl cua</div>
        <div>hi, i make code!</div>
        <div className="hidden lg:block">scroll down to see</div>
        <div className="lg:hidden">swipe up to see</div>
      </div>
    </div>
  )
}

export default Hero