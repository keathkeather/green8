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
    <div className="w-[1196px] h-72 bg-green-900 bg-opacity-20 rounded-[15.01px] shadow flex justify-center" >
      <Carousel>
        {reviews.filter(review => review.rating > 3).map((review, index) => (
            <div>
              <div className="w-[1196px] h-70 text-center text-white text-[22.30px] font-bold font-['Montserrat'] leading-relaxed">{review.text}</div>
              <div className="w-[1196px] h-70 text-center text-stone-300 text-base font-normal font-['Montserrat'] leading-relaxed">{review.author_name}</div>       
            
              <StarRating rating={review.rating}imageLink={review.profile_photo_url} />     
              
            </div>
        ))}
      </Carousel>
    </div>
  );
}