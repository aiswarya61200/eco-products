import React, { useState } from "react";
import "./SavingCalculator.css";

export default function SavingCalculator() {
  const [mode, setMode] = useState("EV");

  // EV options with base cost
  const evOptions = [
    { name: "ATHER RIZTA Z 2.9kWh", baseCost: 130000 },
    { name: "TVS iQube S", baseCost: 125000 },
    { name: "OLA S1 Air", baseCost: 120000 },
  ];

  const [selectedEV, setSelectedEV] = useState(evOptions[0].name);
  const [monthlyKm, setMonthlyKm] = useState(750);
  const [customerId, setCustomerId] = useState("");
  const [powerCompany, setPowerCompany] = useState("TANGEDCO");
  const [city, setCity] = useState("Chennai");
  const [residence, setResidence] = useState("Apartment");

  // Fetch selected EV base cost
  const selectedEVObj = evOptions.find((ev) => ev.name === selectedEV);

  // Constants
  const evRunningCostPerKm = 0.25;
  const petrolRunningCostPerKm = 2.4;
  const petrolEmissionPerKm = 0.15;
  const totalYears = 5;
  const yearlyKm = monthlyKm * 12;
  const totalKm = yearlyKm * totalYears;

  // Dynamic Calculations
  const evCost = selectedEVObj.baseCost + totalKm * evRunningCostPerKm;
  const petrolCost = totalKm * petrolRunningCostPerKm;
  const savings = petrolCost - evCost;
  const carbonSaved = totalKm * petrolEmissionPerKm;

  const handleEVChange = (e) => {
    setSelectedEV(e.target.value);
  };

  return (
    <div className="container">
      <div className="calculator">
        {/* Left Panel */}
        <div className="left-panel">
          <h1>Saving Calculator</h1>
          <p className="subtitle">
            Discover Your Savings with an Electric Two-Wheeler & Rooftop Solar
          </p>

          <div className="mode-tabs">
            <button
              className={`mode-tab ${mode === "EV" ? "active" : ""}`}
              onClick={() => setMode("EV")}
            >
              EV vs 2W Petrol
            </button>
            <button
              className={`mode-tab ${mode === "Solar" ? "active" : ""}`}
              onClick={() => setMode("Solar")}
            >
              Rooftop Solar
            </button>
          </div>

          {mode === "EV" ? (
            <div className="form-group">
              <label className="label">Preferred EV</label>
              <select
                className="input-field"
                value={selectedEV}
                onChange={handleEVChange}
              >
                {evOptions.map((ev) => (
                  <option key={ev.name} value={ev.name}>
                    {ev.name}
                  </option>
                ))}
              </select>

              <label className="label">Average Monthly Running</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="10"
                  max="3000"
                  value={monthlyKm}
                  onChange={(e) => setMonthlyKm(Number(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>10km</span>
                  <span>{monthlyKm}km</span>
                  <span>3,000km</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="form-wrapper">
              <div className="form-row">
                <div className="form-group">
                  <label className="label">Power Distribution Company *</label>
                  <input
                    className="input-field"
                    type="text"
                    value={powerCompany}
                    onChange={(e) => setPowerCompany(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="label">DISCOM Customer ID *</label>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="43333333333333"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="label">Select City *</label>
                  <select
                    className="input-field"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="label">Residence Type *</label>
                  <select
                    className="input-field"
                    value={residence}
                    onChange={(e) => setResidence(e.target.value)}
                  >
                    <option>Apartment</option>
                    <option>Independent House</option>
                  </select>
                </div>
              </div>

              <button className="submit-btn">Submit</button>
            </div>
          )}
        </div>

        {/* Right Panel */}
        {mode === "EV" && (
          <div className="right-panel">
            <div className="ev-header-row">
              <div className="ev-header-image"></div>
              <h2 className="ev-title">{selectedEV}</h2>
            </div>

            <h3 className="great-choice">Great Choice!</h3>
            <div className="savings-box">
              You will save:{" "}
              <span className="savings-amount">
                ₹{Math.round(savings).toLocaleString()}
              </span>
            </div>
            <p className="comparison-text">
              Comparing 5-year total cost of ownership — EV vs Petrol Vehicle
            </p>

            <div className="cost-comparison">
              <div className="cost-box">
                <div className="cost-amount">
                  ₹{Math.round(evCost).toLocaleString()}
                </div>
                <div className="cost-label">EV Total Cost of Ownership</div>
              </div>
              <div className="vs">vs</div>
              <div className="cost-box">
                <div className="cost-amount petrol">
                  ₹{Math.round(petrolCost).toLocaleString()}
                </div>
                <div className="cost-label">For a petrol scooter</div>
              </div>
            </div>

            <div className="carbon-savings">
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              Carbon Emission Savings:{" "}
              {Math.round(carbonSaved).toLocaleString()} kg for 5 years
            </div>
          </div>
        )}

        {mode === "Solar" && (
          <div className="right-panel">
            <h2>Your EMI Calculator</h2>
            <h3 className="section-title">Loan Amount</h3>
            <p className="section-subtitle">
              (select your required loan amount)
            </p>

            <div className="employment-section">
              <h4 className="employment-title">Employed</h4>
              <div className="emi-box">
                <div className="emi-label">EMI</div>
                <div className="emi-amount">₹34,900</div>
              </div>
            </div>

            <p className="disclaimer">
              As per the best-known selected, please check.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
