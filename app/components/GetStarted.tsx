'use client'
import React from 'react';

export default function GetStarted() {
  return (
    <div className="rounded-[20px] bg-gradient-to-t from-goop via-mead to-diamondHead p-[3px] w-[503px] h-[355px]">
        <div className="rounded-[18px] h-[350px] bg-black">
          <form className="mx-auto w-[503px]">
            <div className="text-[25px] font-montserrat font-bold pl-[53px] pb-[9px] pt-[32px]">Get in Touch</div>
            <div className="text-xs font-montserrat font-normal pl-[53px] pb-[20px]">Send us a quick message now!</div>
            <div className="email block pb-[19px] pl-[53px]"> 
                <input type="text" placeholder="First Name" className="font-montserrat input input-bordered rounded-full input-xs pl-[14px] mr-[15px] bg-white w-[188px] h-[32px] text-xs dark:text-black" />
                <input type="text" placeholder="Last Name" className="font-montserrat input input-bordered rounded-full input-xs pl-[14px] bg-white w-[188px] h-[32px] text-xs dark:text-black" />
            </div>
            <div className="block phone pl-[53px]">
                <input type="text" placeholder="Email Address" className="font-montserrat input input-bordered rounded-full  input-xs pl-[14px] bg-white w-[392px] h-[32px] text-xs dark:text-black" />
            </div>
            <div className="name block pt-[16px] pl-[53px]">
              <textarea className="font-montserrat textarea textarea-bordered rounded-[15px] bg-white w-[392px] h-[63px] text-xs dark:text-black" placeholder="Type your message here."></textarea>
            </div>
            <div className="w-[116.31px] h-[30.58px] relative rounded-2xl pl-[53px] pt-[13px] pb-[38px]">
              <div className="w-[116.31px] h-[30.58px] pl-[53px] left-0 top-0 bg-gradient-to-b from-emerald-300 to-lime-300 rounded-2xl shadow" />
              <div className="left-[37.42px] top-[8.41px] pl-[53px] pt-[13px] absolute text-center text-neutral-900 text-[10.30px] font-semibold font-montserrat">SUBMIT</div>
            </div>
          </form>
        </div>
    </div>
  );
}
