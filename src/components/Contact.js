import { useState, useEffect } from 'react'

const Contact = (props) => {

  return(
    <div id="contact" className="py-20 bg-yellow-600">
      <div className="flex flex-col justify-between w-4/5 py-8 mx-auto md:w-3/5">
        <div>
          You can reach me on LinkedIn, GitHub, or by email!
        </div>
        <div className="flex flex-row">
          <img src="" alt="github" />
          <img src="" alt="linkedin" />
        </div>
        <div className="flex flex-col">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div>
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="20" rows="10"></textarea>
          {/* To make responsive, set cols to a variable and then make a media query */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact