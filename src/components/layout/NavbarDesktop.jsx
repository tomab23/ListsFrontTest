import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarDesktop = ({ handleDisconect }) => {

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate("/" + link)
  }

  return (
    <nav className='bg-red-600 rounded-xl flex justify-between items-center max-sm:w-[80vw] w-[58vw] px-3 py-1'>
    <div className='flex max-sm:flex-col gap-5'>
    <h2 onClick={() => handleClick("home")} className='cursor-pointer'>Home</h2>
    <h2 onClick={() => handleClick("lists")} className='cursor-pointer'>mes listes</h2>
    <h2 onClick={() => handleClick("category")} className='cursor-pointer'>Catégories</h2>
    <h2 onClick={() => handleClick("trash")} className='cursor-pointer'>Ma corbeille</h2>
    <h2 onClick={() => handleClick("setting")} className='cursor-pointer'>Parametres</h2>
    </div>

    <div className='flex max-sm:flex-col gap-5'>
      <h2 onClick={handleDisconect} className='cursor-pointer'>Déconnexion</h2>
      <h2 onClick={() => handleClick("user")} className='cursor-pointer'>Mon profil</h2>
    </div>
  </nav>
  )
}

export default NavbarDesktop
