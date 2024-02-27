import React from 'react'
import image from "../../assets/illustrations/noteLoging.svg"

const ImageLogin = () => {
  return (
    <div className="lg:w-[25vw] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
    <img src={image} alt="" className="-mt-10 max-sm:h-40" />
    <div className='-mt-10 max-sm:-mt-5 text-center flex flex-col gap-2'>
    <h2>Création et gestion de listes 📝</h2>
    <h2>Vos listes avec vos notes importantes !</h2>
    </div>
  </div>
  )
}

export default ImageLogin
