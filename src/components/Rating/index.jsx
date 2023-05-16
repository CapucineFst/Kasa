import redStar from "../../assets/red_star.svg";
import greyStar from "../../assets/grey_star.svg";

/**
 * Create an array of 5 elements and map it
 * Get the index of each element and add 1 and name it rating value
 * If the rating value is lower than or equal to the rating of the host, display a red star, otherwise display a grey star
 * @param {string} rating 
 * @returns 
 */
export default function Rating({ rating }) {
  return ([...Array(5)].map((star, index) => {
    const ratingValue = index + 1;
    return (
      <img
        key={index}
        src={ratingValue <= rating ? redStar : greyStar}
        alt="star"
      />
    );
  }));
}
