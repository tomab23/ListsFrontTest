import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {

    const navigate = useNavigate();

    const userLog = localStorage.getItem("log");

    const handleDisconect = () => {
      localStorage.removeItem("log");
      navigate("/");
    }
  return (
    <div className='px-5 pt-6 pb-4'>
      {userLog === "ok" ? 
          <div>
          {window.innerWidth > 900 ? (
            <NavbarDesktop handleDisconect={handleDisconect} />
          ) : (
            <div className="xs:pt-4 sm:pt-4">
              <NavbarMobile handleDisconect={handleDisconect}/>
            </div>
          )}
          </div>
          :
          <nav className='bg-red-600 rounded-xl flex justify-center items-center max-sm:w-[90vw] w-[58vw] px-3 py-1'>
            <h2 className='uppercase'>Bienvenue sur YourList</h2>
        </nav>
          }
    </div>
  )
}

export default Navbar
