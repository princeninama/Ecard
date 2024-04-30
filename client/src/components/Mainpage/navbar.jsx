import '../../css/mainpage.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
const navigate=useNavigate();
const HandleSignin=()=>
{
  navigate('/signin');
} 
 return (
    <nav className="bg-gradient-to-bl from-violet-300 to-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Your logo or brand */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-3xl font-bold brand-text "><span className='text-5xl font-extralight italic'>E</span>cards</span>
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
          
          <div onClick={HandleSignin} className=" sm:flex sm:items-center sm:ml-6 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
          
          Sign In

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar