const About = () => {
  return(
    <div id="about" className="bg-gray-100">
      <div className="flex flex-col justify-between w-4/5 py-20 mx-auto text-lg md:text-2xl lg:w-3/5">
        <div className="self-center pb-12 text-4xl font-bold text-blue-400 md:text-6xl md:self-start">
          about me
        </div>
        <div className="self-center pb-16 text-xl font-bold md:self-start md:text-3xl">
          If you'd like to check out my Resumé, click <a className="text-blue-400 underline hover:text-blue-800" href="https://raw.githubusercontent.com/dainylcua/dc-resume/main/Dainyl%20Cua%20-%20Tech%20Resume%20General.pdf">here!</a>
        </div>
        <div className="pb-12 leading-relaxed">
          I'm Dainyl Cua, a full-stack software engineer based out of the Dallas-Fort Worth area. I love to bake, read, play tabletop games, and annoy my pets! I wrote my first line of code was written while I was helping my sister design her profile page on ToonTownCentral - a forum site for one of our favorite childhood games.
        </div>
        <div className="pb-16 leading-relaxed">
          I officially started my coding journey in 2021 through online courses, then bolstered my skillset with <a className="text-blue-400 underline hover:text-blue-800" href="https://generalassemb.ly/">General Assembly's</a> Software Engineering Immersive course. I primarily develop full-stack applications with the MERN (MongoDB, Express.js, React.js, and Node.js) stack. 
        </div>
        <div className="leading-relaxed"> 
          While I am primarily a MERN stack developer, I am familiar with the following languages, libraries, frameworks, and technologies:
        </div>
        {/* Potentially make this a JSON file? */}
        <div className="flex justify-between pt-5 gap-x-2 lg:w-3/4">
          <ul className="flex flex-col gap-y-2">
            <li className="pb-2 font-bold text-blue-400">Front-End Focused</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bulma CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="pb-2 font-bold text-blue-400">Full-Stack Focused</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>PostgreSQL</li>
          </ul>
          <ul className="flex flex-col gap-y-2"> 
            <li className="pb-2 font-bold text-blue-400">Other</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Trello</li>
            <li>InVision</li>
            <li>MATLAB</li>
            <li>LabView</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About