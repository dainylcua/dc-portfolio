const Footer = () => {
    return(
      <div className="bg-gray-600">
        <footer className="flex items-center justify-between w-4/5 h-16 py-8 mx-auto text-lg text-white md:w-3/5 md:text-2xl">
            <div className="hidden md:block">
                Designed and Devleoped by Dainyl Cua!
                {/* Make this clickable and then change the verb every time? */}
            </div>
            <div>
              Copyright © 2022 Dainyl Cua. All rights reserved.
            </div>
        </footer>
      </div>
    )
} 

export default Footer