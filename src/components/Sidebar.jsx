import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri"
import { logo } from "../assets"
import {links} from "../assets/constants"

import React from 'react'
import { HiOutlineMenu } from "react-icons/hi";

console.log(links)

const NavLinks = () => (
  <div className="mt-10">
    {
      links.map(item => (
        <NavLink
          className=" flex flex-row justify-start items-center my-8 text-sm font-medium"
          onClick={() => handleClick && handleClick()}>
          <item.icon className="w-6 h-6 mr-2 color-red color-red" />
          <p className="text-white hover:text-purple-400">{item.name}</p>
        </NavLink>
      ))
    }
  </div>
)

const Sidebar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#3D1766]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <  NavLinks/>
      </div>

      {/* Monile  */}

      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#9300f562] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar