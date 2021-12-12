import { IconContext } from 'react-icons'
import { SiDjango, SiPostgresql, SiPython, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs, SiBulma, SiTailwindcss, SiBootstrap, SiJquery, SiGithub } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'
const Projects = () => {

  return(
    <div id="projects" className="bg-white">
      <div className="flex flex-col justify-between w-4/5 py-20 mx-auto text-lg md:text-2xl lg:w-3/5">
        <div className="flex flex-col pb-16 md:pb-20 lg:pb-24">
          <div className="self-center pb-12 text-4xl font-bold text-blue-400 md:text-6xl md:self-start">
            project showcase
          </div>
          <div>
            I've worked on a lot of projects, primarily in JavaScript. Check the live sites out by clicking the picture or title, or click the GitHub icon to see the source code! Feel free to contact me in case of any errors.
          </div>
        </div>

        {/* Can componentize this */}
        <div className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-24">
          <div className="flex flex-col items-center lg:items-start lg:flex-row">
            <div className="flex flex-col pb-8 lg:pr-8 lg:w-1/3 lg:pb-0">
              <div className="self-center pb-4 transition transform hover:scale-110">
                <a target="_blank" rel="noopener noreferrer" href="https://dc-dungeon-sheet.netlify.app/">
                  <img className="object-scale-down h-48 p-2 border shadow-md w-96" src="/dungeonsheet.png" alt="DungeonSheet" title="DungeonSheet" />
                </a>
              </div>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="flex justify-evenly">
                  <SiJavascript title="JavaScript" className="transition ease-in-out hover:text-blue-400" />
                  <SiJquery title="jQuery" className="transition ease-in-out hover:text-blue-400" />
                  <SiBootstrap title="Bootstrap CSS" className="transition ease-in-out hover:text-blue-400"/>
                </div>
              </IconContext.Provider>
            </div>
            <div className="flex flex-col lg:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dc-dungeon-sheet.netlify.app/">
                  DungeonSheet
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dainylcua/dungeon-sheet">
                    <SiGithub className="transition ease-in-out hover:text-blue-400" title="GitHub Repository"/>
                  </a>
                </IconContext.Provider>
              </div>
              <div>DungeonSheet was my first big project: a single-page-application created with JavaScript and jQuery that has no frameworks. This app uses the Dungeons and Dragons 5th edition API to create a level 1 character. The API used can be found <a target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-800" href="http://www.dnd5eapi.co/">here!</a></div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row-reverse lg:place-self-end lg:items-start">
            <div className="flex flex-col pb-8 lg:pl-8 lg:w-1/3 lg:pb-0">
              <div className="self-center pb-4 transition transform hover:scale-110">
                <a target="_blank" rel="noopener noreferrer" href="https://dc-5etale.herokuapp.com/">
                    <img className="object-scale-down h-48 p-2 border shadow-md w-96" src="/5etale.png" alt="5eTale" title="5eTale" />
                </a>
              </div>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <div className="flex justify-evenly">
                    <SiJavascript className="transition ease-in-out hover:text-blue-400" title="JavaScript" />
                    <SiJquery className="transition ease-in-out hover:text-blue-400" title="jQuery" />
                    <SiMongodb className="transition ease-in-out hover:text-blue-400" title="MongoDB" />
                    <SiExpress className="transition ease-in-out hover:text-blue-400" title="Express.js" />
                    <SiNodedotjs className="transition ease-in-out hover:text-blue-400" title="Node.js" />
                    <SiBulma className="transition ease-in-out hover:text-blue-400" title="Bulma CSS" />
                  </div>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col lg:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dc-5etale.herokuapp.com/">
                  5eTale
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dainylcua/5etale">
                    <SiGithub className="transition ease-in-out hover:text-blue-400" title="GitHub Repository" />
                  </a>
                </IconContext.Provider>
              </div>
              <div>5eTale is a full-stack CRUD app that uses MonogoDB, Embedded JavaScript, Express.js, Node.js. Create custom items for D&D 5e and share them with other users!</div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:flex-row">
            <div className="flex flex-col pb-8 lg:pr-8 lg:w-1/3 lg:pb-0">
              <div className="self-center pb-4 transition transform hover:scale-110">
                <a target="_blank" rel="noopener noreferrer" href="https://dispbeastio.netlify.app/">
                    <img className="object-scale-down h-48 p-2 border shadow-md w-96" src="/dispbeastio.png" alt="dispbeast.io" title="dispbeast.io" />
                </a>
              </div>
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <div className="flex justify-evenly">
                    <SiJavascript className="transition ease-in-out hover:text-blue-400" title="JavaScript" />
                    <SiMongodb className="transition ease-in-out hover:text-blue-400" title="MongoDB" />
                    <SiExpress className="transition ease-in-out hover:text-blue-400" title="Express.js" />
                    <SiReact className="transition ease-in-out hover:text-blue-400" title="React" />
                    <SiNodedotjs className="transition ease-in-out hover:text-blue-400" title="Node.js" />
                    <SiTailwindcss className="transition ease-in-out hover:text-blue-400" title="Tailwind CSS" />
                  </div>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col lg:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dispbeastio.netlify.app/">
                  dispbeast.io
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dainylcua/dispbeast.io-frontend">
                    <SiGithub className="transition ease-in-out hover:text-blue-400" title="GitHub Repository" />
                  </a>
                </IconContext.Provider>
              </div>
              <div>dispbeast.io is a decoupled full-stack CRUD app with a front-end built with React.js, deployed to Netlify, and a back-end built with Express.js, deployed to Heroku. Gather items with a randomly-generated character and trade items with other users on the marketplace.</div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row-reverse lg:place-self-end lg:items-start">
            <div className="flex flex-col pb-8 lg:pl-8 lg:w-1/3 lg:pb-0">
              <div className="self-center pb-4 transition transform hover:scale-110">
                <a target="_blank" rel="noopener noreferrer" href="https://dc-dev-to-dev-test.herokuapp.com/">
                    <img className="object-scale-down h-48 p-2 border shadow-md w-96" src="/devtodev.png" alt="Dev-to-Dev" title="Dev-to-Dev" />
                </a>
              </div>
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <div className="flex justify-evenly">
                      <SiPython className="transition ease-in-out hover:text-blue-400" title="Python" />
                      <SiDjango className="transition ease-in-out hover:text-blue-400" title="Django" />
                      <SiPostgresql className="transition ease-in-out hover:text-blue-400" title="PostgreSQL" />
                      <DiMaterializecss className="transition ease-in-out hover:text-blue-400" title="Materialize CSS" />
                    </div>
                  </IconContext.Provider>
            </div>
            <div className="flex flex-col lg:w-2/3">
              <div className="flex flex-row pb-4 gap-x-4">
                <a target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-blue-400 underline md:text-4xl hover:text-blue-800" href="https://dc-dev-to-dev-test.herokuapp.com/" title="Dev-to-Dev">
                  Dev-to-Dev
                </a>
                <IconContext.Provider value={{ size: "1.5em"}}>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dainylcua/dev-to-dev">
                    <SiGithub className="transition ease-in-out hover:text-blue-400" title="GitHub Repository" />
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