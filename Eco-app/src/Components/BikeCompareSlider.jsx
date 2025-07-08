import { useRef, useEffect, useState } from "react";
import "./BikeCompareSlider.css";

const bikes = [
  {
    name: "GT Soul Electric",
    price: "₹1,04,999",
    img: "https://nijev.in/wp-content/uploads/2023/02/web-white-xpro-min-1024x945.png",
  },
  {
    name: "GT Soul",
    price: "₹1,63,389",
    img: "https://static.businessworld.in/upload/KJHLI3_GT_Soul_BW.jpeg",
  },
  {
    name: "GT Soul Scooter",
    price: "₹1,55,094",
    img: "https://www.rushlane.com/wp-content/uploads/2022/08/new-gt-soul-electric-scooter-launch-price-specs-5.jpg",
  },
  {
    name: "GT Electric",
    price: "₹1,09,998",
    img: "https://s.alicdn.com/@sc04/kf/H7c6444e7a81641e3a8b599a86ec67322G.jpg_300x300.jpg",
  },
  {
    name: "GT Soul",
    price: "₹1,34,990",
    img: "https://static.businessworld.in/upload/KJHLI3_GT_Soul_BW.jpeg",
  },
  {
    name: "GT Soul Electric",
    price: "₹1,04,999",
    img: "https://nijev.in/wp-content/uploads/2023/02/web-white-xpro-min-1024x945.png",
  },
  {
    name: "GT Soul",
    price: "₹1,34,990",
    img: "https://static.businessworld.in/upload/KJHLI3_GT_Soul_BW.jpeg",
  },
  {
    name: "GT Electric",
    price: "₹1,09,998",
    img: "https://s.alicdn.com/@sc04/kf/H7c6444e7a81641e3a8b599a86ec67322G.jpg_300x300.jpg",
  },
];

function BikeCompareSlider() {

  const sliderRef = useRef(null);

  const[bikeData,setBikeData]=useState([])


  const scroll = (direction) => {
    const { current } = sliderRef;
    if (!current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const words = ["succession", "evaluation", "precision", "vision"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/ev-products')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setBikeData(data)})
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bike-compare-container">
      <h2>
        <span className="hover-text">START </span>
        <span className="hover-text">COMPARE </span>
        <span className="hover-text">YOUR</span>
        <br /> <span className="hover-text"> BIKE </span>
        <span className="hover-text"> WITH </span>
        <span className="rotating-word-container">succession</span>
      </h2>

      <div className="slider-wrapper">
        <button className="nav-btn" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="bike-slider" ref={sliderRef}>
          {bikeData?.map((bike, index) => (
            <div className="bike-card" key={index}>
              <div className="bike-card-content">
                <img src={bike.imageUrl} alt={bike.name} className="bike-img" />
                <h3>{bike.name}</h3>
                <p>{bike.price}</p>
                <button className="compare-btn">Compare</button>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default BikeCompareSlider;
