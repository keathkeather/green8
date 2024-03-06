import React from 'react'
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="navbar h-[80px] bg-navBlack flex flex-row justify-between items-center px-[148px]">
      <div>
        <img src="/Green8Logo.svg" alt="Logo" className="w-[135px] h-[40px]" />
      </div>
      <div className="text-diamondHead text-[15px] font-montserrat font-medium">
        <ul className="menu menu-horizontal">
          <li>
            <a href="#hero" className="px-6">Home</a>
          </li>
          <li>
            <a href="#AboutUs" className="px-6">About</a>
          </li>
          <li>
            <a href="#Equipment" className="px-6">Equipment</a>
          </li>
          <li>
            <a href="#Reviews" className="px-6">Testimonials</a>
          </li>
          <li>
            <a href="#Rates" className="px-6">Rates</a>
          </li>
          <li>
            <a href="#Footer" className="px-6">Contact</a>
          </li>
        </ul>
      </div>
      <div className="w-[140.32px] h-[41.27px] relative rounded-[22.51px] shadow">
        <div className="w-[140.32px] h-[41.27px] left-0 top-0 absolute bg-gradient-to-b from-emerald-300 to-lime-300 rounded-full" />
        <a href='#GetInTouch'>
        <div className="left-[26.70px] top-[13.35px] absolute text-center text-neutral-900 text-xs font-semibold font-montserrat">GET IN TOUCH</div>
        </a>
      </div>
    </div>
  );
}