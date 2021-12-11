import { IconContext } from 'react-icons'
import { SiDjango, SiPostgresql, SiPython, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs, SiBulma, SiTailwindcss, SiBootstrap, SiJquery, SiGithub } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'

const Projects = () => {

  return(
    <div id="projects" className="bg-white">
      <div className="flex flex-col justify-between w-4/5 py-20 mx-auto text-lg md:text-2xl md:w-3/5">
        <div className="flex flex-col pb-8">
          <div className="self-center pb-12 text-4xl font-bold text-blue-400 md:text-6xl md:self-start">
            project showcase
          </div>
          <div>
            I've worked on a lot of projects, primarily in JavaScript. Check the live sites out by clicking the picture or title, or click the GitHub icon to see the source code! Feel free to contact me in case of any errors.
          </div>
        </div>

        {/* Can componentize this */}
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col items-center md:items-start md:flex-row">
            <div className="flex flex-col pb-8 md:pr-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="flex justify-evenly">
                  <SiJavascript />
                  <SiJquery />
                  <SiBootstrap />
                </div>
              </IconContext.Provider>
            </div>
            <div className="flex flex-col md:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dc-dungeon-sheet.netlify.app/">
                  DungeonSheet
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a href="https://github.com/dainylcua/dungeon-sheet">
                    <SiGithub />
                  </a>
                </IconContext.Provider>
              </div>
              <div>DungeonSheet was my first big project: a single-page-application created with JavaScript and jQuery that has no frameworks. This app uses the Dungeons and Dragons 5th edition API to create a level 1 character. The API used can be found <a className="text-blue-400 underline hover:text-blue-800" href="http://www.dnd5eapi.co/">here!</a></div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row-reverse md:place-self-end md:items-start">
            <div className="flex flex-col pb-8 md:pl-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <div className="flex justify-evenly">
                    <SiJavascript />
                    <SiJquery />
                    <SiMongodb />
                    <SiExpress />
                    <SiNodedotjs />
                    <SiBulma />
                  </div>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col md:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dc-5etale.herokuapp.com/">
                  5eTale
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a href="https://github.com/dainylcua/5etale">
                    <SiGithub />
                  </a>
                </IconContext.Provider>
              </div>
              <div>5eTale is a full-stack CRUD app that uses MonogoDB, Embedded JavaScript, Express.js, Node.js. Create custom items for D&D 5e and share them with other users!</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:flex-row">
            <div className="flex flex-col pb-8 md:pr-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <div className="flex justify-evenly">
                    <SiJavascript />
                    <SiMongodb />
                    <SiExpress />
                    <SiReact />
                    <SiNodedotjs />
                    <SiTailwindcss />
                  </div>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col md:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dispbeastio.netlify.app/">
                  dispbeast.io
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a href="https://github.com/dainylcua/dispbeast.io-frontend">
                    <SiGithub />
                  </a>
                </IconContext.Provider>
              </div>
              <div>dispbeast.io is a decoupled full-stack CRUD app with a front-end built with React.js, deployed to Netlify, and a back-end built with Express.js, deployed to Heroku. Gather items with a randomly-generated character and sell or buy items on the marketplace.</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row-reverse md:place-self-end md:items-start">
            <div className="flex flex-col pb-8 md:pl-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <div className="flex justify-evenly">
                      <SiPython />
                      <SiDjango />
                      <SiPostgresql />
                      <DiMaterializecss />
                    </div>
                  </IconContext.Provider>
            </div>
            <div className="flex flex-col md:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dc-dev-to-dev-test.herokuapp.com/">
                  Dev-to-Dev
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a href="https://github.com/dainylcua/dungeon-sheet">
                    <SiGithub />
                  </a>
                </IconContext.Provider>
              </div>
              <div>Dev-to-Dev is built in Python using the Django framework and handles data using PostgreSQL. The app aims to connect bootcamp students and junior software developers to discuss various topics related to the tech field. Dev-to-Dev was created as a group project where I took up the role as the GitHub manager and general full-stack developer.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects