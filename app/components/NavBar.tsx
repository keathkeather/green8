import React from 'react'
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="navbar h-[80px] bg-navBlack flex flex-row justify-between items-center px-[148px]">
      <div>
        <img src="/Green8Logo.svg" alt="Logo" className='w-[135px] h-[40px]' />
      </div>
        <div className="text-diamondHead text-[15px] font-montserrat font-medium">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/" className="px-6">Home</Link>
            </li>
            <li>
              <Link href="/about" className="px-6">About</Link>
            </li>
            <li>
              <Link href="/equipment" className="px-6">Equipment</Link>
            </li>
            <li>
              <Link href="/testimonials" className="px-6">Testimonials</Link>
            </li>
            <li>
              <Link href="/rates" className="px-6">Rates</Link>
            </li>
          </ul>
        </div>
          <div className="w-[140.32px] h-[41.27px] relative rounded-[22.51px] shadow">
            <div className="w-[140.32px] h-[41.27px] left-0 top-0 absolute bg-gradient-to-b from-emerald-300 to-lime-300 rounded-full" />
            <div className="left-[26.70px] top-[13.35px] absolute text-center text-neutral-900 text-xs font-semibold font-montserrat">GET IN TOUCH</div>
          </div>
    </div>
  );
}