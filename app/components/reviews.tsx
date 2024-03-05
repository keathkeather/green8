'use client'
import React, { useEffect, useState } from "react";
import { Carousel } from 'flowbite-react';
import StarRating from '../utils/StarRating';

type Review = {
  author_name:string;
  text:string
  rating:number
  profile_photo_url:string
};

type ApiResponse = {
  result: {
    reviews: Review[];
  };
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/GetReviews')
      .then(response => response.json())
      .then((data: ApiResponse) => setReviews(data.result.reviews))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='relative w-full flex flex-col justify-center pl-[120px] pr-[121px] pt-[89px] pb-[79px] bg-[#141213]'>
      <div className='absolute inset-0' style={{backgroundImage: "url('/TextureBackground.png')", backgroundSize: 'cover', opacity: '0.8'}}></div>
      <div className="text-emerald-300 text-[38.70px] font-bold font-['Changeling Neo'] leading-7 mb-[25px] text-center">OUR CLIENTS SAY</div>
      <div className="text-stone-300 text-[16px] font-montserrat leading-7 mb-[25px] text-center">
      Our Clients send us a bunch of smiles with our services and we appreciate them
      </div>
      <div className="relative w-[1196px] h-72 bg-green-900 bg-opacity-20 rounded-[15.01px] shadow flex justify-center" >
          <Carousel>
            {reviews.filter(review => review.rating > 3).map((review, index) => (
              <div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[800px] text-center text-white text-[22.30px] font-bold font-['Montserrat'] leading-relaxed">{review.text}</div>
                  <div className="h-70 text-center text-stone-300 text-base font-normal font-['Montserrat'] pt-[5px]">
                    {review.author_name}
                    </div> 
                </div> 
                <div className="pt-[15px]">     
                  <StarRating rating={review.rating}imageLink={review.profile_photo_url} />
                </div>
              </div> 
            ))}
          </Carousel>
      </div>
    </div>
  );
}