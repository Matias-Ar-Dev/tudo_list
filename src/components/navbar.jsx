import {  Home, LucideCog, LucideLogOut,  MenuIcon, User2, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const isActive = (path)  => location.pathname === path;
  return (
    
    
        
        <div className={`fixed top-0 left-0 h-full md:w-64 bg-cyan-950 transition-width duration-300 text-white
          ${isOpen ? "w-64": "w-20"} `}> 

          <div className="flex justify-between items-center p-4">
            <h2 className={`text-xl font-bold md:block ${isOpen ? "block": "hidden"}`}>MyApp</h2>
            <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}> 
              
              {isOpen ? <X className="w-5 h-5"/> : <MenuIcon className="w-5 h-5"/>}
            </button>
          </div>

          <nav className="mt-4">
            <ul>
              <Link to = '/' className={`flex items-center p-4 hover:bg-cyan-700 cursor-pointer ${isActive('/') ? 'bg-cyan-700 border-l-[3px] border-cyan-300': ''}`}> 
                <Home className="w-5 h-5"/>
                <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`} >
Home
                </span>

              </Link>

              <Link to ='/profile' className={`flex items-center p-4 hover:bg-cyan-700 cursor-pointer ${isActive('/profile') ? 'bg-cyan-700 border-l-[3px] border-cyan-300': ''}`}> 
                <User2 className="w-5 h-5"/>
                <span  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
Profile
                </span>

              </Link>

              

              <Link to= '/setting' className={`flex items-center p-4 hover:bg-cyan-700 cursor-pointer ${isActive('/setting') ? 'bg-cyan-600 border-l-[3px] border-cyan-300': ''}`}> 
                <LucideCog className="w-5 h-5"/>
                <span  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
Settings
                </span>

              </Link>

              

              <Link to='/' className={`flex items-center p-4 hover:bg-cyan-700 cursor-pointer ${isActive('/tes') ? 'bg-cyan-600 border-l-[3px] border-cyan-300': ''}`}> 
                <LucideLogOut className="w-5 h-5"/>
                <span  className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
Logout
                </span>

              </Link>
            </ul>

          </nav>

        </div>
            
     

      
    
  )
}

export default Navbar

