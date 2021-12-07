const About = () => {
  return(
    <div id="about" className="bg-blue-600">
      <div className="flex-col justify-between w-4/5 py-20 mx-auto text-3xl md:w-3/5">
        <div className="text-sm">
          about me
        </div>
        <div>
          I'm Dainyl Cua, a full-stack software engineer based out of the Dallas-Fort Worth area.
        </div>
        <div>
          I officially started my coding journey in 2021 through online courses, then bolstered my skillset with General Assembly's Software Engineering Immersive course. I primarily develop full-stack applications with the MERN (MongoDB, Express.js, React.js, and Node.js) stack. 
        </div>
        <div>
          While I am primarily a MERN stack developer, I am familiar with the following languages, libraries, frameworks, and technologies.
        </div>
        {/* Potentially make this a JSON file? */}
        <div className="flex">
          <ul>
            <li></li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bulma CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>PostgreSQL</li>
            <li>MATLAB</li>
          </ul>
          <ul>
            <li>GitHub</li>
            <li>Trello</li>
            <li>InVision</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About