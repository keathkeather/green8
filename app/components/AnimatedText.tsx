'use client'
import React from 'react';

export default function AnimatedText() {
    return (
        <div className="bg-neutral-800 box-border  p-4 flex items-center bottom-0 overflow-hidden">
        <div className="animate ">
          {
            [0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
            <div key={i} className="text-[#E5e5e5] font-bold text-[24px] tracking-[10px] font-montserrat bold whitespace-nowrap inline-flex items-center justify-center">
                FOCUS ON YOUR 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FFC978] to-[#6FCF97] '>&nbsp;FITNESS&nbsp;</span>
                NOT YOUR LOSS •&nbsp;
            </div>
            ))
          }
        </div>
      </div>
    )
}