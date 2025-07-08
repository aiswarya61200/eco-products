import React, { useState, useRef, useEffect } from "react";
import "./EvAndRts.css"; // We'll create this CSS file

const EvAndRts = () => {
  const scrollRefEV = useRef();
  const scrollRefSolar = useRef();
  const [wishlist, setWishlist] = useState([]);
  const[bikeData,setBikeData]=useState([])
  const[solarData,setSolarData]=useState([])


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
    fetch('http://localhost:5000/api/rts-products')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setSolarData(data)})
    .catch((err) => console.log(err));
  }, []);


  const seedEvProducts = [
    {
      _id: 1,
      name: "Eco Smart Scooter Pro",
      description: "Premium electric scooter with advanced features",
      price: 59999,
      imageUrl:
        "https://stat.overdrive.in/wp-content/uploads/2022/07/Ather-450X-3rd-gen-1.jpg",
    },
    {
      _id: 2,
      name: "Power EV Bike Xtreme",
      description: "High-performance electric bike for adventure seekers",
      price: 89999,
      imageUrl:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/50403/450-right-front-three-quarter.jpeg?q=75",
    },
    {
      _id: 3,
      name: "City Commuter Lite",
      description: "Lightweight electric scooter for daily urban travel",
      price: 42999,
      imageUrl:
        "https://media.zigcdn.com/media/model/2025/Jan/front-left-view-335426591_600x400.jpg",
    },
    {
      _id: 4,
      name: "Bajaj Chetak 3502",
      description: "Stylish and modern daily EV",
      price: 119999,
      imageUrl:
        "https://stat.overdrive.in/wp-content/uploads/2022/07/Ather-450X-3rd-gen-1.jpg",
    },
    {
      _id: 5,
      name: "Ola S X",
      description: "Powerful scooter with long range",
      price: 92894,
      imageUrl:
        "https://media.zigcdn.com/media/model/2025/Jan/front-left-view-335426591_600x400.jpg",
    },
  ];

  // const solarData = [
  //   {
  //     _id: 11,
  //     name: "Pahal Solar Bundle 8kW (7.91kW) VVK",
  //     price: 419930,
  //     range: "120 KM Range",
  //     chargeTime: "7.5 Hrs Charging",
  //     imageUrl:
  //       "https://indianinstituteofsolarenergy.com/wp-content/uploads/2019/05/blog3.jpg",
  //   },
  //   {
  //     _id: 12,
  //     name: "Pahal Solar Bundle 6.5kW (6.78kW) VVK",
  //     price: 363800,
  //     range: "120 KM Range",
  //     chargeTime: "7.5 Hrs Charging",
  //     imageUrl:
  //       "https://5.imimg.com/data5/SELLER/Default/2024/10/460008196/PV/IM/AU/18924686/10kw-on-grid-solar-power-system.jpg",
  //   },
  //   {
  //     _id: 13,
  //     name: "Pahal Solar Bundle 5.5kW (5.65kW) VVK",
  //     price: 303160,
  //     range: "120 KM Range",
  //     chargeTime: "7.5 Hrs Charging",
  //     imageUrl:
  //       "https://5.imimg.com/data5/SELLER/Default/2022/2/VS/XE/LA/42226778/on-grid-rooftop-solar-system-500x500.jpg",
  //   },
  //   {
  //     _id: 14,
  //     name: "Pahal Solar Bundle 5kW (5.09kW) VVK",
  //     price: 278880,
  //     range: "120 KM Range",
  //     chargeTime: "7.5 Hrs Charging",
  //     imageUrl:
  //      "https://5.imimg.com/data5/SELLER/Default/2022/2/VS/XE/LA/42226778/on-grid-rooftop-solar-system-500x500.jpg",
  //   },
  //   {
  //     _id: 15,
  //     name: "Pahal Solar Bundle 4.5kW (5.09kW) VVK",
  //     price: 247680,
  //     range: "120 KM Range",
  //     chargeTime: "7.5 Hrs Charging",
  //     imageUrl:
  //       "https://5.imimg.com/data5/AT/XJ/MY-12281492/solar-power-plant.jpg",
  //   },
  //   {
  //     _id: 16,
  //     name: "Pahal Solar Bundle 4.9kW (5.09kW) VVK",
  //     price: 297680,
  //     range: "120 KM Range",
  //     chargeTime: "7.5 Hrs Charging",
  //     imageUrl:
  //       "https://5.imimg.com/data5/AT/XJ/MY-12281492/solar-power-plant.jpg",
  //   },
  // ];

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (!current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderCarousel = (title, data, ref, isSolar = false) => (
    <div className="ev-container">
      <div className="ev-header">
        <h2>{title}</h2>
        <button className="view-all">View All</button>
      </div>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll(ref, "left")}>
          ‹
        </button>
        <div className="ev-carousel" ref={ref}>
          {data.map((item) => (
            <div className="ev-card" key={item._id}>
              <div className="badge">
                {isSolar ? "Recommended" : "Fast Selling"}
              </div>
              <div className="card-top">
                <label className="compare">
                  <input type="checkbox" /> Compare
                </label>
                <span
                  className="wishlist"
                  onClick={() => toggleWishlist(item._id)}
                >
                  {wishlist.includes(item._id) ? "♥" : "♡"}
                </span>
              </div>
              <img src={item.imageUrl} alt={item.name} className="ev-image" />
              <h3>{item.name}</h3>
              {isSolar && (
                <p className="solar-sub">
                  {item.range} | {item.chargeTime}
                </p>
              )}
              {!isSolar && <p className="desc">{item.description}</p>}
              <p className="emi">
                EMI: ₹{Math.round(item.price / 36).toLocaleString()}
                <br />
                <span className="price">or ₹{item.price.toLocaleString()}</span>
              </p>
              <button className="explore-btn">Explore</button>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll(ref, "right")}>
          ›
        </button>
      </div>
    </div>
  );

  return (
    <>
      {renderCarousel("Popular EV Scooters", bikeData, scrollRefEV)}
      {renderCarousel("Popular Rooftop Solar", solarData, scrollRefSolar, true)}
    </>
  );
};

export default EvAndRts;
