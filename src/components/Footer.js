import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
      <div className="bg-gray-900">
        <footer className="flex items-center justify-between w-4/5 h-16 py-8 mx-auto text-xl text-white md:w-3/5 md:text-2xl">
            <div>
                Created by Dainyl Cua!
            </div>
            <div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="hidden md:visible">
                        Find me here:
                    </div>
                    <div>
                        <a href="https://twitter.com/dainylcua">
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/dainylcua/">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div>
                    <a href="https://github.com/dainylcua">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
} 

export default Footer