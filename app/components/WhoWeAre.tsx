'use client'
import React from 'react';

export default function WhoWeAre() {
    return (
        <div className='bg-gradient-to-l from-neutral-900 to-neutral-800 w-full flex justify-center'>
            <div className="w-[1441px] h-[512px] pl-[120px] pr-[121px] pt-[89px] pb-[79px] bg-gradient-to-l from-neutral-900 to-neutral-800 justify-center items-center gap-[70px] inline-flex">
            <div className="w-[590px] h-[344px] relative">
                <div className="aspect-video">
                <video className='w-full h-full rounded-[15px] ' autoPlay controls>
                    <source src="/DoNotUse.mp4" type="video/mp4" />
                </video>
                </div>
            </div>
            <div className="w-[590px] h-[280px]  relative">
                    <div className=" text-emerald-300 text-[38.70px] font-bold font-['Changeling Neo'] leading-7">WHO WE ARE</div>
                    <div className="w-[540px] h-[154px] left-0 top-[46.34px] absolute text-neutral-100 text-opacity-80 text-sm font-normal font-['Montserrat'] leading-normal">
                    We're Green8 Fitness Gym – a beacon of inclusivity and empowerment in Mandaue City's fitness landscape. With a dedication to embracing all genders and fostering
                     a supportive environment, we've become a cornerstone of our community. At Green8, we're more than just a gym – we're a catalyst for transformation, guiding 
                     individuals of every background and fitness level towards their goals. Join us and experience the difference as we redefine fitness and empower every body. 
                    </div>
                    <div className="w-[156px] h-[41px] left-[1px] top-[210px] absolute rounded-[22.51px] flex-col justify-start items-start inline-flex">
                        <button 
                            className="text-black btn glass w-[155px] rounded-full bg-gradient-to-t from-goop to-diamondHead" 
                            type="submit"
                            >
                            VISIT US
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    )
}