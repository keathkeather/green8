'use client'
import React from 'react';

export default function GetStarted() {
  return (
    <div className="rounded-[20px] bg-gradient-to-t from-goop via-mead to-diamondHead p-[3px] w-[615px]">
        <div className="rounded-[18px] p-8 bg-black">
          <form className="mx-auto w-[500px]">
            <div className="text-[32px] font-montserrat font-bold">Get in Touch</div>
            <div className="text-[15px] font-montserrat pb-[32px]">Send us a quick message now!</div>
            <div className="email block pb-[24px]"> 
                <input type="text" placeholder="First Name" className="font-montserrat input input-bordered rounded-full input-xs pl-[14px] mr-[19px] bg-white w-[233px] h-[40px] text-[13px]" />
                <input type="text" placeholder="Last Name" className="font-montserrat input input-bordered rounded-full input-xs pl-[14px] bg-white w-[233px] h-[40px] text-[13px]" />
            </div>
            <div className="block phone">
                <input type="text" placeholder="Email Address" className="font-montserrat input input-bordered rounded-full  input-xs pl-[14px] bg-white w-[485px] h-[40px] text-[13px]" />
            </div>
            <div className="name block pt-[20px]">
              <textarea className="font-montserrat textarea textarea-bordered rounded-[15px] bg-white w-[485px] text-[13px]" placeholder="Type your message here."></textarea>
            </div>
            <div className="button block pt-[27px]">
              <button className="text-black btn glass w-[155px] rounded-full bg-gradient-to-t from-goop to-diamondHead" type="submit">VISIT US</button>
            </div>
          </form>
        </div>
    </div>
  );
}
