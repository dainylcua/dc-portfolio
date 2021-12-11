const About = () => {
  return(
    <div id="about" className="bg-gray-100">
      <div className="flex flex-col justify-between w-4/5 py-20 mx-auto text-lg md:text-2xl lg:w-3/5">
        <div className="self-center pb-16 text-4xl font-bold text-blue-400 md:text-6xl md:self-start">
          about me
        </div>
        <div className="self-center pb-16 text-xl font-bold md:self-start md:text-3xl">
          If you'd like to check out my Resumé, click <a target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-800" href="https://raw.githubusercontent.com/dainylcua/dc-resume/main/Dainyl%20Cua%20-%20Tech%20Resume%20General.pdf">here!</a>
        </div>
        <div className="pb-12 leading-relaxed">
          I'm Dainyl Cua, a full-stack software engineer based out of the Dallas-Fort Worth area. I love to bake, read, play tabletop games, and annoy my pets! I wrote my first line of code while helping my sister design her HTML profile page on ToonTownCentral in 2008 - a forum site for one of our favorite childhood games.
        </div>
        <div className="pb-16 leading-relaxed">
          I officially started my coding journey in 2021 through online courses, then bolstered my skillset with <a target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-800" href="https://generalassemb.ly/">General Assembly's</a> Software Engineering Immersive course. I primarily develop full-stack applications with the MERN (MongoDB, Express.js, React.js, and Node.js) stack. 
        </div>
        <div className="leading-relaxed"> 
          While I am primarily a MERN stack developer, I am familiar with the following languages, libraries, frameworks, and technologies:
        </div>
        {/* Potentially make this a JSON file? */}
        <div className="flex justify-between pt-5 gap-x-2 lg:w-3/4">
          <ul className="flex flex-col gap-y-2">
            <li className="pb-2 font-bold text-blue-400">Coding Languages</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>MATLAB</li>
            <li>LabView</li>
            <li>VBA</li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="pb-2 font-bold text-blue-400">Frameworks / Libraries</li>
            <li>React</li>
            <li>Express.js</li>
            <li>jQuery</li>
            <li>Django</li>
            <li>Tailwind CSS</li>
            <li>Bulma CSS</li>
            <li>Bootstrap CSS</li>
            <li>Materialize CSS</li>
          </ul>
          <ul className="flex flex-col gap-y-2"> 
            <li className="pb-2 font-bold text-blue-400">Other Technologies</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Google Firebase</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Trello</li>
            <li>InVision App</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About