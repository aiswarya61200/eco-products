import React, { useEffect, useState } from "react";
import "./Comparisions.css";
import { useNavigate } from "react-router-dom";

// const comparisonsData = [
//   {
//     leftImage:
//       "https://nijev.in/wp-content/uploads/2023/02/web-white-xpro-min-1024x945.png",
//     rightImage: "https://static.businessworld.in/upload/KJHLI3_GT_Soul_BW.jpeg",
//     leftName: "GT Soul Electric",
//     rightName: "GT Soul",
//     leftPrice: "₹1,04,999",
//     rightPrice: "₹99,999",
//   },
//   {
//     leftImage:
//       "https://s.alicdn.com/@sc04/kf/H7c6444e7a81641e3a8b599a86ec67322G.jpg_300x300.jpg",
//     rightImage:
//       "https://www.rushlane.com/wp-content/uploads/2022/08/new-gt-soul-electric-scooter-launch-price-specs-5.jpg",

//     leftName: "GT Soul New",
//     rightName: "GT Classic",
//     leftPrice: "₹1,14,999",
//     rightPrice: "₹1,09,999",
//   },
//   {
//     leftImage:
//       "https://nijev.in/wp-content/uploads/2023/02/web-white-xpro-min-1024x945.png",
//     rightImage:
//       "https://s.alicdn.com/@sc04/kf/H7c6444e7a81641e3a8b599a86ec67322G.jpg_300x300.jpg",
//     leftName: "GT Xpro",
//     rightName: "GT Classic",
//     leftPrice: "₹1,19,999",
//     rightPrice: "₹1,09,999",
//   },
//   {
//     leftImage: "https://static.businessworld.in/upload/KJHLI3_GT_Soul_BW.jpeg",
//     rightImage:
//       "https://www.rushlane.com/wp-content/uploads/2022/08/new-gt-soul-electric-scooter-launch-price-specs-5.jpg",
//     leftName: "GT Soul Updated",
//     rightName: "GT Soul",
//     leftPrice: "₹1,24,999",
//     rightPrice: "₹99,999",
//   },
//   {
//     leftImage:
//       "https://nijev.in/wp-content/uploads/2023/02/web-white-xpro-min-1024x945.png",
//     rightImage:
//       "https://s.alicdn.com/@sc04/kf/H7c6444e7a81641e3a8b599a86ec67322G.jpg_300x300.jpg",
//     leftName: "GT Xpro",
//     rightName: "GT Classic",
//     leftPrice: "₹1,19,999",
//     rightPrice: "₹1,09,999",
//   },
//   {
//     leftImage:
//       "https://s.alicdn.com/@sc04/kf/H7c6444e7a81641e3a8b599a86ec67322G.jpg_300x300.jpg",
//     rightImage:
//       "https://www.rushlane.com/wp-content/uploads/2022/08/new-gt-soul-electric-scooter-launch-price-specs-5.jpg",

//     leftName: "GT Soul New",
//     rightName: "GT Classic",
//     leftPrice: "₹1,14,999",
//     rightPrice: "₹1,09,999",
//   },
// ];

function Comparisions() {
  const navigate = useNavigate();
  const[productsData,setProductsData]=useState([])
  const [selectedProducts, setSelectedProducts] = useState([0, 1]);



useEffect(() => {
  fetch('http://localhost:5000/api/ev-products')
  .then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  })
  .then((data) => {
    console.log(data)
    setProductsData(data)})
  .catch((err) => console.log(err));
}, []);
const product1 = productsData[selectedProducts[0]] || {};
const product2 = productsData[selectedProducts[1]] || {};

const handleChangeProduct = (index) => {
  // Function to show product selection modal
  console.log(`Change product ${index + 1}`);
};
  return (
    <>
      {/* Banner Section */}
      <div className="compare-banner">
        <img
          src="/assets/compare_banner.jpg"
          alt="Compare Banner"
          className="banner-image"
        />
                <div className="overlay">

        <div className="breadcrumb-container">
            <div className="breadcrumb">
              <span onClick={() => navigate('/')} className="breadcrumb-link">Home</span>
              &gt; 
              <span className="breadcrumb-current">Comparisons</span>
            </div>
          </div>
          
          {/* Title - Centered */}
          <div className="title-container">
            <h1 className="banner-title">
              Choose your <span className="highlight">Product</span>
            </h1>
          </div>
        
        </div>
      </div>

      {/* Compare Section */}
      <div className="compare-container">
        {/* Add Vehicle to Compare */}
        <div className="add-compare-box">
        <div className="comparison-page">
      {/* Header */}
       
       

      {/* Product Images and Names */}
      <div className="product-display">
        <div className="product-column">
          <img 
            src={product1.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'} 
            alt={product1.name || 'Product 1'} 
            className="product-image" 
          />
          <h3 className="product-name">{product1.name || "Product 1"}</h3>
        </div>
        <div className="vs-circle">VS</div>
        <div className="product-column">
          <img 
            src={product2.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'} 
            alt={product2.name || 'Product 2'} 
            className="product-image" 
          />
          <h3 className="product-name">{product2.name || "Product 2"}</h3>
        </div>
      </div>

      {/* Change Product Buttons */}
      <div className="change-product-buttons">
        <button onClick={() => handleChangeProduct(0)}>Change Product</button>
        <button onClick={() => handleChangeProduct(1)}>Change Product</button>
      </div>

      {/* General Comparisons Table */}
      <div className="comparison-section">
        <h2>General Comparisons</h2>
        
        <table className="spec-table">
          <tbody>
            <tr>
              <td>Ex-showroom price</td>
              <td>₹{product1.price?.toLocaleString('en-IN') || "N/A"}</td>
              <td>₹{product2.price?.toLocaleString('en-IN') || "N/A"}</td>
            </tr>
            <tr>
              <td>Certified range</td>
              <td>{product1.certifiedRange || "N/A"}</td>
              <td>{product2.certifiedRange || "N/A"}</td>
            </tr>
            <tr>
              <td>True range</td>
              <td>{product1.trueRange || "-"}</td>
              <td>{product2.trueRange || "-"}</td>
            </tr>
            <tr>
              <td>Motor power (nominal/peak)</td>
              <td>{product1.motorPowerNominalPeak || "N/A"}</td>
              <td>{product2.motorPowerNominalPeak || "N/A"}</td>
            </tr>
            <tr>
              <td>Charging time</td>
              <td>{product1.chargingTime || "N/A"}</td>
              <td>{product2.chargingTime || "N/A"}</td>
            </tr>
            <tr>
              <td>Fast charging</td>
              <td>{product1.fastCharging || "N/A"}</td>
              <td>{product2.fastCharging || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Technical Specifications Section */}
      <div className="comparison-section">
        <h2>Technical Specs</h2>
        
        <table className="spec-table">
          <tbody>
            <tr>
              <td>Motor type</td>
              <td>{product1.motorType || "-"}</td>
              <td>{product2.motorType || "-"}</td>
            </tr>
            <tr>
              <td>Battery type</td>
              <td>{product1.batteryType || "-"}</td>
              <td>{product2.batteryType || "-"}</td>
            </tr>
            <tr>
              <td>Battery capacity</td>
              <td>{product1.batteryCapacity || "-"}</td>
              <td>{product2.batteryCapacity || "-"}</td>
            </tr>
            <tr>
              <td>Key type</td>
              <td>{product1.keyType || "-"}</td>
              <td>{product2.keyType || "-"}</td>
            </tr>
            <tr>
              <td>Charger type</td>
              <td>{product1.chargerType || "-"}</td>
              <td>{product2.chargerType || "-"}</td>
            </tr>
            <tr>
              <td>Ignition</td>
              <td>{product1.ignition || "-"}</td>
              <td>{product2.ignition || "-"}</td>
            </tr>
            <tr>
              <td>Front tyre size</td>
              <td>{product1.frontTyreSize || "-"}</td>
              <td>{product2.frontTyreSize || "-"}</td>
            </tr>
            <tr>
              <td>Rear tyre size</td>
              <td>{product1.rearTyreSize || "-"}</td>
              <td>{product2.rearTyreSize || "-"}</td>
            </tr>
            <tr>
              <td>Braking system</td>
              <td>{product1.brakingSystem || "-"}</td>
              <td>{product2.brakingSystem || "-"}</td>
            </tr>
            <tr>
              <td>Front brake type</td>
              <td>{product1.frontBrakeType || "-"}</td>
              <td>{product2.frontBrakeType || "-"}</td>
            </tr>
            <tr>
              <td>Rear brake type</td>
              <td>{product1.rearBrakeType || "-"}</td>
              <td>{product2.rearBrakeType || "-"}</td>
            </tr>
            <tr>
              <td>Frame type</td>
              <td>{product1.frameType || "-"}</td>
              <td>{product2.frameType || "-"}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{product1.transmission || "-"}</td>
              <td>{product2.transmission || "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Performance Section */}
      <div className="comparison-section">
        <h2>Performance</h2>
        
        <table className="spec-table">
          <tbody>
            <tr>
              <td>Top speed</td>
              <td>{product1.topSpeed || "-"}</td>
              <td>{product2.topSpeed || "-"}</td>
            </tr>
            <tr>
              <td>Riding modes</td>
              <td>{product1.ridingModes || "-"}</td>
              <td>{product2.ridingModes || "-"}</td>
            </tr>
            <tr>
              <td>True range (Eco mode)</td>
              <td>{product1.trueRangeEcoMode || "-"}</td>
              <td>{product2.trueRangeEcoMode || "-"}</td>
            </tr>
            <tr>
              <td>True range (Normal mode)</td>
              <td>{product1.trueRangeNormalMode || "-"}</td>
              <td>{product2.trueRangeNormalMode || "-"}</td>
            </tr>
            <tr>
              <td>0-40 kmph acceleration</td>
              <td>{product1.zeroToForty || "-"}</td>
              <td>{product2.zeroToForty || "-"}</td>
            </tr>
            <tr>
              <td>60-0 kmph braking</td>
              <td>{product1.braking60To0 || "-"}</td>
              <td>{product2.braking60To0 || "-"}</td>
            </tr>
            <tr>
              <td>Max torque</td>
              <td>{product1.maxTorque || "-"}</td>
              <td>{product2.maxTorque || "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>

        {/* Popular Comparison */}
        <h2 className="popular-heading">
          Popular <span className="bold">Comparison</span>
        </h2>
{/* 
        <div className="comparison-scroll">
          <div className="comparison-list">
            {comparisonsData.map((item, index) => (
              <div className="compare-card" key={index}>
                <div className="compare-images">
                  <img src={item.leftImage} alt="Product 1" />
                  <div className="vs-circle">VS</div>
                  <img src={item.rightImage} alt="Product 2" />
                </div>
                <div className="compare-names">
                  <p>{item.leftName}</p>
                  <p>{item.rightName}</p>
                </div>
                <div className="compare-prices">
                  <p>{item.leftPrice}</p>
                  <p>{item.rightPrice}</p>
                </div>
                <button className="compare-btn">Compare</button>
              </div>
            ))}
          </div>
        </div> */}
        <div className="comparison-scroll">
  <div className="comparison-list">
    {/* Create pairs of products for comparison */}
    {productsData.reduce((acc, _, index, array) => {
      // Only create pairs for even indexes (0 & 1, 2 & 3, etc.)
      if (index % 2 === 0) {
        const product1 = array[index];
        const product2 = array[index + 1] || array[0]; // Fallback to first product if odd number
        
        acc.push(
          <div className="compare-card" key={index}>
            <div className="compare-images">
              <img src={product1.imageUrl} alt={product1.name} />
              <div className="vs-circle">VS</div>
              <img src={product2.imageUrl} alt={product2.name} />
            </div>
            <div className="compare-names">
              <p>{product1.name}</p>
              <p>{product2.name}</p>
            </div>
            <div className="compare-prices">
              <p>₹{product1.price.toLocaleString()}</p>
              <p>₹{product2.price.toLocaleString()}</p>
            </div>
            <div className="compare-features">
              {/* <div>
                {product1.features.slice(0, 3).map((feature, i) => (
                  <p key={i}>✓ {feature}</p>
                ))}
              </div> */}
              {/* <div>
                {product2.features.slice(0, 3).map((feature, i) => (
                  <p key={i}>✓ {feature}</p>
                ))}
              </div> */}
            </div>
            <button className="compare-btn">Compare</button>
          </div>
        );
      }
      return acc;
    }, [])}
  </div>
</div>
      </div>
    </>
  );
}



export default Comparisions;