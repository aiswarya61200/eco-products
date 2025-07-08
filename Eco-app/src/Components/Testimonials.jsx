import React from "react";
import Slider from "react-slick";
import "./TestimonialsStyle.css";

const Testimonials = () => {
  const testimonials = [
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/images.ecozaar.in/uat/uploads/2024/10/18081431/snehal_testimonials.png",
      name: "Lalitha",
      location: "Chennai",
      text: "I bought my first electric scooter six months ago. I was a little nervous at first, but I love the freedom of the EV two-wheeler! The low...",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/images.ecozaar.in/uat/uploads/2024/10/18081431/snehal_testimonials.png",
      name: "Falak",
      location: "Ahmedabad",
      text: "I've always wanted to live sustainably, and rooftop solar panels were my first big step. It was super easy to set up. Now, they power my...",
    },
    {
      image:
        "https://s3.ap-south-1.amazonaws.com/images.ecozaar.in/uat/uploads/2024/10/18081431/rahul_testimonials.png",
      name: "Anuj",
      location: "Pune",
      text: "Installing rooftop solar panels was one of the best decisions for my family. Our electricity bill has dropped by almost 70% and the savings...",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(testimonials.length, 3),
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="testimonialWrapper">
      <div className="brandLogos">
        <div className="brandLogo">
          <img
            src="https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/TVS_grey.svg"
            alt="TVS"
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/ather_grey.svg"
            alt="Ather"
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/chetak_grey.svg"
            alt="Chetak"
          />
        </div>
        <div className="brandLogo">
          <img
            src="https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/chetak_grey.svg"
            alt="Chetak"
          />
        </div>
      </div>
      <div className="testimonialSection">
        <h2 className="sectionTitle">What People are saying about us!</h2>

        <div className="actionButtons">
          <button className="actionBtn primary">Get all Reviews</button>
          <button className="actionBtn secondary">Explore</button>
        </div>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div className="testimonialCard" key={index}>
              <p className="testimonialText">{item.text}</p>
              <div className="userInfo">
                <img src={item.image} alt={item.name} className="userImage" />
                <div>
                  <div className="userName">{item.name}</div>
                  <div className="userLocation">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
