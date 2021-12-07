import { IconContext } from 'react-icons'
import { SiDjango, SiPostgresql, SiPython, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs, SiBulma, SiTailwindcss, SiBootstrap, SiJquery } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'

const Projects = () => {

  return(
    <div id="projects" className="py-20 bg-green-600">
      <div className="flex flex-col justify-between w-4/5 py-8 mx-auto md:w-3/5">
        <div className="flex flex-col">
          <div>
            Project Showcase
          </div>
          <div>
            I've worked on a lot of projects, primarily in JavaScript. Check them out below! Feel free to contact me in case any errors pop up.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>Image</div>
              <div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiJavascript />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiJquery />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiBootstrap />
                    </div>
                  </IconContext.Provider>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <a href="https://dc-dungeon-sheet.netlify.app/">DungeonSheet</a>
              </div>
              <div>DungeonSheet was my first big project: a single-page-application created with JavaScript and jQuery that has no frameworks. This app uses the Dungeons and Dragons 5th edition API to create a level 1 character. The API used can be found <a href="http://www.dnd5eapi.co/">here!</a></div>
            </div>
          </div>
          <div className="flex flex-row-reverse place-self-end">
            <div className="flex flex-col">
              <div>Image</div>
              <div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiJavascript />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiJquery />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiMongodb />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiExpress />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiNodedotjs />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiBulma />
                    </div>
                  </IconContext.Provider>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <a href="https://dc-5etale.herokuapp.com/">
                  5eTale
                </a>
              </div>
              <div>5eTale is a full-stack CRUD app that uses MonogoDB, Embedded JavaScript, Express.js, Node.js. Create custom items for D&D 5e and share them with other users!</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>Image</div>
              <div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiJavascript />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiMongodb />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiExpress />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiReact />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiNodedotjs />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiTailwindcss />
                    </div>
                  </IconContext.Provider>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <a href="https://dispbeastio.netlify.app/">
                  dispbeast.io
                </a>
              </div>
              <div>dispbeast.io is a decoupled full-stack CRUD app with a front-end built with React.js, deployed to Netlify, and a back-end built with Express.js, deployed to Heroku. Gather items with a randomly-generated character and sell or buy items on the marketplace.</div>
            </div>
          </div>
          <div className="flex flex-row-reverse place-self-end">
            <div className="flex flex-col">
              <div>Image</div>
              <div>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiPython />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiDjango />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <SiPostgresql />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: "2em" }}>
                    <div>
                      <DiMaterializecss />
                    </div>
                  </IconContext.Provider>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
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