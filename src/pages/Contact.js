import { IconContext } from 'react-icons'
import { SiGithub, SiLinkedin} from 'react-icons/si'

const Contact = () => {
  // Use state to manage form data

  return(
    <div id="contact" className="py-20 bg-gray-100 ">
      <div className="flex flex-col justify-between w-4/5 mx-auto text-lg md:w-3/5 md:text-3xl">
          <div className="self-center pb-12 text-4xl font-bold text-blue-400 md:text-6xl md:self-start">contact me</div>
          <div>
            You can reach me on LinkedIn, GitHub, or by sending me an email!
          </div> 
          <div className="flex p-8 mx-auto gap-x-8">
            <div>
              <IconContext.Provider value={{ size: "2em" }}>
                <a href="https://www.linkedin.com/in/dainylcua/">
                  <SiLinkedin />
                </a>
              </IconContext.Provider>
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
          <a className="mx-auto" href="mailto:dainylcuainquiries@gmail.com">
            <div className="p-8 text-blue-400 bg-white border-2 rounded-md shadow-md hover:text-blue-800 hover:shadow-inner">
                Send an Email
            </div>
          </a>
      </div>
    </div>
  )
}

export default Contact