import React, { useEffect, useState } from "react";
import "./ProductPage.css"; // Import the external CSS
import SavingCalculator from "../Components/SavingCalculator";
import EMICalculator from "../Components/EMICalculator";
import EvAndRts from "../Components/EvAndRts";
import BikeCompareSlider from "../Components/BikeCompareSlider";
import Testimonials from "../Components/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ExchangeSteps from "../Components/ExchangeSteps";
const ProductPage = () => {
  return (
    <>
      <div className="product-details">
        <div className="product-details">
          {/* Top Banner Slider */}
          <div className="top-banner-slider">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
            >
              <SwiperSlide>
                <img
                  src="/assets/chetak1-2.avif"
                  alt="EV Banner"
                  className="slider-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/IQUBE-1.avif"
                  alt="Solar Banner"
                  className="slider-image"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Eco Smart Section */}
          <div
            className="eco-products-section"
            style={{ padding: "60px 20px" }}
          >
            {/* Main Heading */}
            <h2
              className="section-title"
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "600",
                color: "#0f0f0f",
                marginBottom: "50px",
              }}
            >
              Eco–Smart Finds to{" "}
              <span style={{ color: "#2f2261", fontWeight: "700" }}>
                Power Your Green Journey
              </span>
            </h2>

            {/* Cards */}
            <div
              className="card-container"
              style={{
                display: "flex",
                gap: "40px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* EV Scooter Card */}
              <div
                style={{
                  width: "480px",
                  height: "240px",
                  backgroundImage: `url("/assets/EcoGreen.avif")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "30px",
                  transition: "opacity 0.8s ease-in-out",
                }}
              >
                <div style={{ color: "white", maxWidth: "55%" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Best Platform for EV Subscription
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "20px",
                    }}
                  >
                    Affordable bike leasing made simple – with service you can
                    count on.
                  </p>
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "#2a2a76",
                      padding: "10px 22px",
                      fontSize: "15px",
                      fontWeight: "600",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    EV Scooter
                  </button>
                </div>
                <img
                  src="/assets/rizta.avif"
                  alt="EV Scooter"
                  style={{
                    width: "160px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Rooftop Solar Card */}
              <div
                style={{
                  width: "480px",
                  height: "240px",
                  backgroundImage: `url("/assets/rts_bg.avif")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "30px",
                  transition: "opacity 0.8s ease-in-out",
                }}
              >
                <div style={{ color: "white", maxWidth: "55%" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Easy Way to Lease Rooftop Solar
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "20px",
                    }}
                  >
                    Empowering homes with cost-effective solar energy and
                    worry-free setup.
                  </p>
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "#2a2a76",
                      padding: "10px 22px",
                      fontSize: "15px",
                      fontWeight: "600",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Rooftop Solar
                  </button>
                </div>
                <img
                  src="/assets/Resign-pattern_2.svg"
                  alt="Solar Panel"
                  style={{
                    width: "160px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Subtext */}
            <div
              className="section-subtext"
              style={{
                textAlign: "center",
                marginTop: "60px",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#2c2c2c",
                  marginBottom: "10px",
                }}
              >
                Electrify your life
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#2f2261",
                }}
              >
                Subscribe or Buy, the choice is yours, ALWAYS!
              </p>
            </div>
          </div>
        </div>
        <ExchangeSteps />
        <SavingCalculator />
        <EMICalculator />
        <BikeCompareSlider />
        <EvAndRts />
        <Testimonials />
      </div>
    </>
  );
};

export default ProductPage;
