const Contact = () => {
  // Use state to manage form data

  return(
    <div id="contact" className="py-20 bg-yellow-600">
      <div className="flex flex-col justify-between w-4/5 py-8 mx-auto md:w-3/5">
        <div>
          You can reach me on LinkedIn, GitHub, or by email!
        </div>
        <div>
          <a href="mailto:dainylcuainquiries@gmail.com">Send an Email</a>
        </div>
      </div>
    </div>
  )
}

export default Contact