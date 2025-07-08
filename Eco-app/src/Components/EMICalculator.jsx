import React, { useState, useEffect } from "react";
import "./EMICalculator.css";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(710000);
  const [interestRate, setInterestRate] = useState(9.3);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestComponent, setInterestComponent] = useState(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = tenure;
    const emiCalc = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emiCalc * n;
    const interestAmt = total - loanAmount;

    setEmi(Math.round(emiCalc));
    setTotalPayable(Math.round(total));
    setInterestComponent(Math.round(interestAmt));
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="emi-wrapper">
      <h2 className="emi-heading">Your EMI Calculator</h2>
      <div className="emi-container">
        <div className="emi-calc-wrapper">
          <div className="inputs-section">
            <div className="slider-group">
              <label>
                Loan Amount
                <br />
                <small>(select your required loan amount)</small>
              </label>
              <input type="range" min="50000" max="2000000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
              <div className="slider-value">₹{loanAmount.toLocaleString()}</div>
            </div>

            <div className="slider-group">
              <label>
                Interest
                <br />
                <small>(select your interest)</small>
              </label>
              <input type="range" min="1" max="30" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
              <div className="slider-value">{interestRate}%</div>
            </div>

            <div className="tenure-buttons">
              <label>Tenure in Months</label>
              <div className="tenure-options">
                {[12, 18, 24, 30, 36, 48, 60].map((t) => (
                  <button key={t} className={tenure === t ? "active" : ""} onClick={() => setTenure(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="ticket-box">
            <div className="ticket-inner">
              <p className="emi-label">EMI</p>
              <h3 className="emi-value">₹{emi.toLocaleString()}</h3>
              <p className="emi-note">As per the loan amount selected, please check breakdown</p>

              <div className="divider">
                <img src="/icons/Divider.png" alt="" />
              </div>

              <div className="summary-section">
                <p className="summary-title">Total Payable</p>
                <div className="summary-row">
                  <div className="summary-icon">
                    <img src="https://images.ecozaar.in/FE-Image/TotalPayable.svg" alt="Total Payable" />
                  </div>
                  <p className="summary-amount">₹{totalPayable.toLocaleString()}</p>
                </div>
              </div>

              <div className="divider">
                <img src="/icons/Divider.png" alt="" />
              </div>

              <div className="summary-section">
                <p className="summary-title">Interest Component</p>
                <div className="summary-row">
                  <div className="summary-icon">
                    <img src="/icons/Intrest.svg" alt="Intrest" />
                  </div>
                  <p className="summary-amount">₹{interestComponent.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
