import { useState, useEffect } from 'react'

const Projects = (props) => {
  

  return(
    <div id="projects" className="py-20 bg-green-600">
      <div className="flex flex-col justify-between w-4/5 py-8 mx-auto md:w-3/5">
        <div className="flex flex-col">
          <div>
            Project Showcase
          </div>
          <div>
            I've worked on a lot of projects, primarily in JavaScript. Check them out below!
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>Image</div>
              <div>Badges</div>
            </div>
            <div className="flex flex-col">
              <div>DungeonSheet</div>
              <div>DungeonSheet was my first big project: a single-page-application created with JavaScript and jQuery that has no frameworks. This app uses the Dungeons and Dragons 5th edition API to create a level 1 character. The API used can be found <a href="http://www.dnd5eapi.co/">here!</a></div>
            </div>
          </div>
          <div className="flex flex-row-reverse place-self-end">
            <div className="flex flex-col">
              <div>Image</div>
              <div>Badges</div>
            </div>
            <div className="flex flex-col">
              <div>5eTale</div>
              <div>5eTale is a full-stack CRUD app that uses Embedded JavaScript. </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>Image</div>
              <div>Badges</div>
            </div>
            <div>Project 3 description</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects