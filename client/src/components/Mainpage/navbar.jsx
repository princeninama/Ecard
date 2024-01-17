import '../../css/mainpage.css'

const Navbar = () => {

  return (
    <nav className="bg-gradient-to- via-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Your logo or brand */}
            <div className="flex-shrink-0 flex items-center mb-6 cursor-pointer">
              <span className="text-3xl font-bold brand-text "><span className='text-8xl font-extralight italic'>e</span>cards</span>
            </div>
            {/* Navbar links */}
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-6">
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Home
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                About
              </a>
              {/* Add more links as needed */}
            </div>
          </div>
          {/* Additional actions or buttons */}
          
          <div className="hidden sm:flex sm:items-center sm:ml-6">
          <div className="bg-gradient-to-r from-gray-300 to-pink-200 text-neutral-50 px-3 py-1 mx-4 rounded-md w-30 h-8 flex justify-center items-center text-[14px] cursor-pointer hover:w-24 hover:brightness-75 " style={{ fontFamily: 'Arial' }} >
              premium <div style={{backgroundColor:'#fbbe28',borderRadius:'50%',marginLeft:4,}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg>
              </div>

            </div>
            <div className="bg-blue-500 text-white px-3 py-1 rounded-md w-40 h-10 flex justify-center items-center text-[14px] cursor-pointer hover:bg-blue-600" style={{ fontFamily: 'Arial' }} >
              Create a Design

            </div>
            <div className="bg-gray-500 ml-4 cursor-pointer text-white rounded-full w-10 h-10 flex justify-center items-center">
              <span className="text-xl ">A</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar