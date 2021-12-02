import { useState, useEffect } from 'react'

const Projects = (props) => {
  

  return(
    <div id="projects" className="py-20 bg-green-600">
      <div className="flex flex-col justify-between w-4/5 py-8 mx-auto md:w-3/5">
        <div>
          I've worked on a lot of projects, primarily in web development. Check them out below!
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>Image</div>
              <div>Badges</div>
            </div>
            <div>Project 1 description</div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>Image</div>
              <div>Badges</div>
            </div>
            <div>Project 2 description</div>
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