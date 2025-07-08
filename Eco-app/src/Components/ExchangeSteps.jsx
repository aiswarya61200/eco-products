import React, { useEffect, useState } from "react";
import "./ExchangeSteps.css"; // Place CSS separately or inline

const ExchangeSteps = () => {
  const steps = [
    {
      id: "01",
      title: "Pick your plan",
      description: "Rs.999 onwards",
    },
    {
      id: "02",
      title: "Paperless Process",
      description: "Skip the negotiations",
    },
    {
      id: "03",
      title: "Retain or Return the EV",
      description: "Starting from Rs.999",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="exchange-wrapper">
      <img
        src="/assets/SavingLogo.svg"
        alt="EV Exchange Banner"
        className="exchange-top-image"
      />

      <div className="exchange-box">
        <div
          className="highlight-bg"
          style={{ transform: `translateY(${activeStep * 100}%)` }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`exchange-step ${activeStep === index ? "active" : ""}`}
          >
            <div className="step-number">{step.id}</div>
            <div className="step-text">
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="exchange-note">
        *Exchange is applicable only for Bajaj Chetak 2903,
        <br />
        Ather 450X 3.7 kWh & TVS iQube (UG 12) 3.4 kWh
      </div>

      <button className="exchange-cta">Exchange your old bike</button>
    </div>
  );
};

export default ExchangeSteps;
