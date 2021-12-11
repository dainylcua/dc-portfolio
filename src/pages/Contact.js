import { IconContext } from 'react-icons'
import { SiGithub, SiLinkedin} from 'react-icons/si'

const Contact = () => {
  // Use state to manage form data

  return(
    <div id="contact" className="py-20 bg-gray-100 ">
      <div className="flex flex-col justify-between w-4/5 mx-auto text-lg lg:w-3/5 md:text-2xl">
          <div className="self-center pb-12 text-4xl font-bold text-blue-400 md:text-6xl md:self-start">contact me</div>
          <div className="pt-8 pb-16 text-xl font-bold text-center md:text-3xl md:text-start">
            I'm currently seeking any available opportunities, whether that be for full-time, part-time, or contracted employment!
          </div> 
          <div>
            If you want to reach out for an offer, a quick chat, or for any questions, feel free to contact me through email, GitHub, or LinkedIn! I'll reply as soon as I can.
          </div>
          <div className="flex p-8 mx-auto gap-x-8">
            <div>
              <IconContext.Provider value={{ size: "2em" }}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dainylcua/">
                  <SiLinkedin className="transition ease-in-out hover:text-blue-400" />
                </a>
              </IconContext.Provider>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dainylcua">
                <IconContext.Provider value={{ size: "2em" }}>
                  <div>
                    <SiGithub className="transition ease-in-out hover:text-blue-400" />
                  </div>
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <a className="mx-auto" href="mailto:dainylcuainquiries@gmail.com">
            <div className="p-8 text-blue-400 transition ease-in-out bg-white border-2 rounded-md shadow-md hover:text-blue-800 hover:shadow-inner">
                Send an Email
            </div>
          </a>
      </div>
    </div>
  )
}

export default Contact