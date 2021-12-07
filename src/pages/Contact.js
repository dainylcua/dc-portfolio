import { IconContext } from 'react-icons'
import { SiGithub, SiLinkedin} from 'react-icons/si'

const Contact = () => {
  // Use state to manage form data

  return(
    <div id="contact" className="py-20 bg-gray-100">
      <div className="flex flex-col justify-between w-4/5 py-8 mx-auto md:w-3/5">
        <div>
          <div>
            You can reach me on LinkedIn, GitHub, or by email!
          </div> 
          <div>
              <a href="https://www.linkedin.com/in/dainylcua/">
                <IconContext.Provider value={{ size: "2em" }}>
                  <div>
                    <SiLinkedin />
                  </div>
                </IconContext.Provider>
              </a>
          </div>
          <div>
            <a href="https://github.com/dainylcua">
              <IconContext.Provider value={{ size: "2em" }}>
                <div>
                  <SiGithub />
                </div>
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div>
          <a href="mailto:dainylcuainquiries@gmail.com">Send an Email</a>
        </div>
      </div>
    </div>
  )
}

export default Contact