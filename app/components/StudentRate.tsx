import React from 'react'

export default function StudentRate(){
    return(
    <div className='ml-[120px] flex space-x-[73px]'>
        <div className="rounded-[20px] mt-[52px] bg-gradient-to-t from-goop via-mead to-diamondHead p-[2px] w-[366px] h-[421px]">
                <div className="bg-black rounded-[18px] px-[49px] pt-[38px] pb-[83px] h-[415px]">
                    <div className="font-bold font-montserrat text-[40px] flex space-x-0">
                        1 MONTH
                        <button className="w-[25.51px] h-[11.74px] text-black bg-emerald-300 cursor-default font-medium text-[8.16px] ml-[9px] my-4 text-center" disabled>-10%</button>
                    </div> 
                    <div className="pt-[2px] font-normal text-[21px]">We offer Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</div>
                    <div className="pt-[74px] text-[60px] font-bold text-center">₱800</div> 
            </div>
        </div>
        <div className="rounded-[20px] mt-[52px] bg-gradient-to-t from-goop via-mead to-diamondHead p-[2px] w-[366px] h-[421px]">
                <div className="bg-black rounded-[18px] px-[49px] pt-[38px] pb-[83px] h-[415px]">
                    <div className="font-bold font-montserrat text-[40px] flex space-x-0">
                        3 MONTHS
                        <button className="w-[25.51px] h-[11.74px] text-black bg-emerald-300 cursor-default font-medium text-[8.16px] ml-[9px] my-4 text-center" disabled>-6%</button>
                    </div> 
                    <div className="pt-[2px] font-normal text-[21px]">We offer Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</div>
                    <div className="pt-[74px] text-[60px] font-bold text-center">₱2250</div> 
            </div>
        </div>
        <div className="rounded-[20px] mt-[52px] bg-gradient-to-t from-goop via-mead to-diamondHead p-[2px] w-[366px] h-[421px]">
                <div className="bg-black rounded-[18px] px-[49px] pt-[38px] pb-[83px] h-[415px]">
                    <div className="font-bold font-montserrat text-[40px] flex space-x-0">
                        6 MONTHS
                        <button className="w-[25.51px] h-[11.74px] text-black bg-emerald-300 cursor-default font-medium text-[8.16px] ml-[9px] my-4 text-center" disabled>-12%</button>
                    </div> 
                    <div className="pt-[2px] font-normal text-[21px]">We offer Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</div>
                    <div className="pt-[74px] text-[60px] font-bold text-center">₱4200</div> 
            </div>
        </div>
    </div>
    )
}