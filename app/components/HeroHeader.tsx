'use client'
import React from 'react';

export default function HeroHeader() {
    return (
        <div className='relative w-full h-[670px] flex flex-col justify-center'>
            <div className='absolute inset-0 z-0' style={{backgroundImage: "url('/HeroHeaderImage.png')", backgroundSize: 'cover'}}></div>
            <div className="z-10 flex flex-col pl-[140px] pt-[80px] pb-[79px] w-full h-[750px]">
                <span className="text-[e5e5e5] text-[46.77px] font-bold font-montserrat">LEVEL UP YOUR </span>
                <div className='text-[e5e5e5] text-[46.77px] font-bold font-montserrat'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-lime-300 text-[46.77px] font-bold font-montserrat">FITNESS JOURNEY </span>
                TO</div>
                <span className="text-black text-[46.77px] font-bold font-montserrat"> </span>
                <span className="text-[e5e5e5] text-[46.77px] font-bold font-montserrat">THE NEXT LEVEL</span>

                <div className="pt-[30px] text-[e5e5e5] text-sm font-normal font-montserrat leading-normal">Ready to Sculpt Your Best Self? Discover the Ultimate Fitness Journey with Us!</div>
                <div className="w-[622.06px] h-[131.32px] items-start inline-flex">
                    <div className="w-[155.18px] h-[137.84px] relative">
                        <div className="w-[155px] h-[137.84px] left-0 top-0 absolute" />
                        <div className="w-[100px] h-[58.56px] left-[31.57px] top-[39.57px] absolute flex-col justify-start items-center gap-[3.56px] inline-flex">
                            <div className="text-center text-[e5e5e5] text-4xl font-black font-inter uppercase italic">10+</div>
                            <div className="pt-[4px] text-center text-[e5e5e5] text-[11.12px] font-bold font-lato leading-none">Years in Business</div>
                        </div>
                    </div>
                    <div className="w-[155.18px] h-[137.84px] relative">
                        <div className="w-[155px] h-[137.84px] left-0 top-0 absolute" />
                        <div className="w-[100px] h-[58.56px] left-[27.57px] top-[39.57px] absolute flex-col justify-start items-center gap-[3.56px] inline-flex">
                            <div className="text-center text-[e5e5e5] text-4xl font-black font-inter italic">500+</div>
                            <div className="pt-[4px] text-center text-[e5e5e5] text-[11.12px] font-bold font-lato leading-none">Happy Clients</div>
                        </div>
                    </div>
                    <div className="w-[155.18px] h-[137.84px] relative">
                        <div className="w-[155px] h-[137.84px] left-0 top-0 absolute" />
                        <div className="w-[107px] h-[58.56px] left-[28.90px] top-[39.57px] absolute flex-col justify-start items-center gap-[3.56px] inline-flex">
                            <div className="text-center text-[e5e5e5] text-4xl font-black font-inter italic">2K+</div>
                            <div className="pt-[4px] text-center text-[e5e5e5] text-[11.12px] font-bold font-lato leading-none">Facebook Followers</div>
                        </div>
                    </div>
                </div>
                    <div className="w-[156.96px] h-[41.27px] relative rounded-[22.51px] mt-[15px]">
                        <div className="w-[156.96px] h-[41.27px] left-0 top-0 absolute bg-gradient-to-b from-emerald-300 to-lime-300 rounded-[22.51px] shadow" />
                        <a href='#GetInTouch'>
                        <div className="left-[29.05px] top-[12.35px] absolute text-center text-neutral-900 text-sm font-semibold font-inter">GET IN TOUCH</div>
                        </a>
                    </div>
            </div>
        </div>
    )
}

