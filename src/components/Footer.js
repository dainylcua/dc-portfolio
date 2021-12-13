import { IconContext } from 'react-icons'
import { SiGithubactions } from 'react-icons/si'

const Footer = () => {
    return(
      <div className="bg-blue-400">
        <footer className="flex items-center justify-between w-4/5 h-16 py-8 mx-auto text-lg text-white lg:w-3/5 md:text-2xl">
            <div className="hidden lg:block">
              <a target="_blank" rel="noopener noreferrer" className="hover:text-red-200" href="https://github.com/dainylcua/dc-portfolio">
                <div className="flex flex-row items-center gap-x-2">
                  Designed and Developed by Dainyl Cua!
                  <IconContext.Provider value={{ size: "1em" }}>
                    <SiGithubactions />
                  </IconContext.Provider>
                </div>
                {/* Make this clickable and then change the verb every time? */}
              </a>
            </div>
            <div>
              Copyright © 2022 Dainyl Cua. All rights reserved.
            </div>
        </footer>
      </div>
    )
} 

export default Footer