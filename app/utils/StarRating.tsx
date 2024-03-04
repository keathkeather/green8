type StarRatingProps = {
    rating: number;
    imageLink: string;
};
  
  const StarRating: React.FC<StarRatingProps> = ({ rating,imageLink }) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} src="/star gold.svg" alt="Full Star" />);
      } else {
        stars.push(<img key={i} src="/star white.svg" alt="Empty Star" />);
      }
    }
  
    return( 
        <div className="flex ml-[500px] items-center justify-center w-[199px] h-10 bg-white rounded-[25px]">
        <img src={imageLink} alt="Profile"loading="eager" className="w-6 h-6 rounded-full border" />
            {stars}
        </div>
    );
  };
  export default StarRating;