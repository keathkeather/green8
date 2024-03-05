import React from 'react';

export default function ContactUs() {
  return (
    <div className="w-full bg-navBlack flex flex-col items-center">
        <div className="relative">
            <img src="/cubg.svg" alt="CUBG" className="w-full h-auto mt-20 mb-12" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="font-bold text-[40px] mt-8">Follow us on <a href="#" className="hover:underline">Facebook</a></p>
            </div>
        </div>
        <div className="w-full flex justify-between mb-8">
            <div className="w-[25%] p-4 ml-40 text-white">
                <div>
                    <img src="/Green8Logo.svg" alt="Logo" className="w-[135px] h-[40px] mb-5" />
                </div>
                <p className="font-['Montserrat'] text-md">
                    Empowering diversity, redefining fitness: Where every body thrives together—your catalyst for transformation.
                </p>
            </div>
            <div className="w-[20%] p-4 ml-20 text-white">
                <p className="font-bold mb-8 text-xl">Utility Pages</p>
                <ul className="font-['Montserrat'] text-md">
                    <li className="mb-4"><a href="#" className="hover:underline">About</a></li>
                    <li className="mb-4"><a href="#" className="hover:underline">Equipment</a></li>
                    <li className="mb-4"><a href="#" className="hover:underline">Testimonials</a></li>
                    <li className="mb-4"><a href="#" className="hover:underline">Rates</a></li>
                </ul>
            </div>
            <div className="w-[25%] p-4 mr-40 text-white">
                <p className="font-bold mb-8 text-xl">For more inquiries:</p>
                <div>
                    <div className="p-6 border border-gray-400" style={{ backgroundColor: '#242A32' }}>
                        <ul className="text-sm">
                            <li style={{ color: '#6FCF97' }}>Call:</li>
                            <li>01234 987654</li>
                            <li>098765 34621</li>
                        </ul>
                    </div>
                    <img src="/cui.svg" alt="CUI" className="w-full h-auto mt-8" />
                </div>
            </div>
        </div>
        <div className="w-full h-16 mt-5 flex flex-col items-center" style={{ backgroundColor: '#242A32' }}>
            <p className="font-['Montserrat'] text-md mt-5">
                <span style={{ color: '#6A6A6A' }}>Copyright ©</span> <span style={{ color: '#6FCF97', fontWeight: 'bold' }}>Green8 Fitness Gym</span> <span style={{ color: '#6A6A6A' }}>| Designed by</span> <span style={{ color: '#FFC978', fontWeight: 'bold' }}>01K+</span>
            </p>
        </div>
    </div>
  );
}
