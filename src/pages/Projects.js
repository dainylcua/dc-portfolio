import { IconContext } from 'react-icons'
import { SiDjango, SiPostgresql, SiPython, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs, SiBulma, SiTailwindcss, SiBootstrap, SiJquery } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'

const Projects = () => {

  return(
    <div id="projects" className="bg-gray-200">
      <div className="flex flex-col justify-between w-4/5 py-20 mx-auto text-lg md:text-3xl md:w-3/5">
        <div className="flex flex-col pb-8">
          <div className="self-center pb-12 text-4xl font-bold md:text-6xl md:self-start">
            project showcase
          </div>
          <div>
            I've worked on a lot of projects, primarily in JavaScript. Check them out below! Feel free to contact me in case any errors pop up.
          </div>
        </div>

        {/* Can componentize this */}
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col items-center md:items-start md:flex-row">
            <div className="flex flex-col pb-8 md:pr-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
              <IconContext.Provider value={{ size: "2em" }}>
                <div className="flex justify-evenly">
                  <SiJavascript />
                  <SiJquery />
                  <SiBootstrap />
                </div>
              </IconContext.Provider>
            </div>
            <div className="flex flex-col md:w-2/3">
              <div className="font-bold">
                <a href="https://dc-dungeon-sheet.netlify.app/">DungeonSheet</a>
              </div>
              <div>DungeonSheet was my first big project: a single-page-application created with JavaScript and jQuery that has no frameworks. This app uses the Dungeons and Dragons 5th edition API to create a level 1 character. The API used can be found <a href="http://www.dnd5eapi.co/">here!</a></div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row-reverse md:place-self-end md:items-start">
            <div className="flex flex-col pb-8 md:pl-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
                <IconContext.Provider value={{ size: "2em" }}>
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
              <div className="font-bold">
                <a href="https://dc-5etale.herokuapp.com/">
                  5eTale
                </a>
              </div>
              <div>5eTale is a full-stack CRUD app that uses MonogoDB, Embedded JavaScript, Express.js, Node.js. Create custom items for D&D 5e and share them with other users!</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:flex-row">
            <div className="flex flex-col pb-8 md:pr-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
                <IconContext.Provider value={{ size: "2em" }}>
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
              <div className="font-bold">
                <a href="https://dispbeastio.netlify.app/">
                  dispbeast.io
                </a>
              </div>
              <div>dispbeast.io is a decoupled full-stack CRUD app with a front-end built with React.js, deployed to Netlify, and a back-end built with Express.js, deployed to Heroku. Gather items with a randomly-generated character and sell or buy items on the marketplace.</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row-reverse md:place-self-end md:items-start">
            <div className="flex flex-col pb-8 md:pl-8 md:w-1/3 md:pb-0">
              <div className="self-center p-8">Image</div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div className="flex justify-evenly">
                      <SiPython />
                      <SiDjango />
                      <SiPostgresql />
                      <DiMaterializecss />
                    </div>
                  </IconContext.Provider>
            </div>
            <div className="flex flex-col md:w-2/3">
              <div className="font-bold">
                <a href="https://dc-dev-to-dev-test.herokuapp.com/">
                  Dev-to-Dev
                </a>
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