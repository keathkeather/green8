'use client'
import React, { useState } from 'react';
import sendEmail from '../utils/Email';
import RegularRate from '../components/RegularRate';
import StudentRate from './StudentRate';
export default function RatesMain(){
  const [selectedRate, setSelectedRate] = useState('regular');
  return (
    <div className = "bg-black w-[1920px] h-[1066px]">
       <div className='bg-cover bg-center' style={{backgroundImage: "url('/HeroHeaderImage.png')"}}></div>
      <div className="mt-[83.43px] w-[1920px] h-[86.86px] text-center text-emerald-300 text-[57.90px] font-bold font-['Changeling Neo'] leading-[86.86px]">GYM RATES</div>
      <div className="ml-[428px] w-[1108.57px] h-[34.29px] text-center text-white text-xl font-normal font-['Montserrat'] leading-[34.29px]">We offer Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</div>
      <div className ="w-[653px] h-[90px] ml-[658px] text-center">
        <span className='text-[32px] font-bold font-montserrat leading-[34.29px] montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#FFC978] to-[#6FCF97] '>&nbsp;We are OPEN from Monday to Saturday 
            <br/>7:00 AM - 9:00 PM&nbsp;
        </span>
      </div>
      <div className="ml-[876px] p-6 mt-[25px] flex items-center justify-center w-[210px] h-[61.52px] bg-gray-800 rounded-[32.81px]">
        <button
              onClick={() => setSelectedRate('regular')}
              className={`w-[107.46px] h-[45.12px] rounded-full p-3 ${
                selectedRate === 'regular'
                  ? 'bg-gradient-to-b from-emerald-300 to-lime-300 text-black'
                  : 'bg-gray-800 text-white hover:text-white'
              }`}
            >
            REGULAR
        </button>
        <button
            onClick={() => setSelectedRate('student')}
            className={`w-[107.46px] h-[45.12px] rounded-full p-3 ${
              selectedRate === 'student'
                ? 'bg-gradient-to-b from-emerald-300 to-lime-300 text-black'
                : 'bg-gray-800 text-white hover:text-white'
            }`}
          >
            STUDENT
        </button>
      </div>
      {selectedRate === 'regular' ? <RegularRate /> : <StudentRate />}
      <div className="pt-[67px] text-center text-[32px] font-montserrat">
        We also offer Walk-ins for only <a className="text-green-300 font-bold">₱100 </a>
        <a className="font-normal text-green-300">per session!</a>
      </div>
    </div>
  );
}