import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MenuNavbarMobile = ({ handleDisconect }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (url) => {
    setIsOpen(false);
    navigate(url);
  };

  const menuItems = [
    { label: "Home", url: "/home" },
    { label: "Mes listes", url: "/lists" },
    { label: "Catégorie", url: "/category" },
    { label: "Ma corbeille", url: "/trash" },
    { label: "Parametres", url: "/setting" },
  ];

  const UserProfile = () => {
    setIsOpen(false);
    navigate("/user")
  }

  return (
    <nav>
      <div className="relative inline-block text-left">
        <div>
          <div className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium">
            {!isOpen ? (
              <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
            ) : (
              <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
        </div>

        {isOpen && (
          <div
            // divide-y divide-gray-100
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-dark-light ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                className="block px-4 py-2 text-sm hover:bg-slate-500 text-white cursor-pointer"
                role="menuitem"
                onClick={() => handleClick(item.url)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                className="cursor-pointer block px-4 py-2 text-sm hover:bg-slate-500 text-white"
                onClick={handleDisconect}
              >
                Déconnexion
              </a>
              <a onClick={UserProfile} className="cursor-pointer block px-4 py-2 text-sm hover:bg-slate-500 text-white">
                Mon profil
              </a>
            </div>
            {/* <ChangeLanguage mobile={true} />
              <div className="flex justify-center">
                <DarkMode mobile={true} />
              </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MenuNavbarMobile;
