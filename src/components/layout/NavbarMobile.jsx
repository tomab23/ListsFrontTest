import React from 'react'
import MenuNavbarMobile from './MenuNavbarMobile'

const NavbarMobile = ({ handleDisconect }) => {
  return (
    <header>
    <div
      className="bg-red-600 rounded-xl flex justify-between items-center max-sm:w-[89vw] w-[58vw] px-3 py-1 -mt-4 h-10"
    >
      <h2 className="uppercase">
        YourLists
      </h2>
      <MenuNavbarMobile handleDisconect={handleDisconect} />
    </div>
  </header>
  )
}

export default NavbarMobile
