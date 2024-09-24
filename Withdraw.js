import React, { useState } from 'react';

function Withdraw({ onWithdraw }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    onWithdraw(accountNumber, amount);
    resetForm();
  };

  const resetForm = () => {
    setAccountNumber('');
    setAmount('');
  };

  return (
    <div className="card p-4">
      <h3>Withdraw</h3>
      <div className="mb-3">
        <label className="form-label">Account Number</label>
        <input
          type="text"
          className="form-control"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
       
      <div className="d-flex">
        <button className="hero-button btn btn-danger me-2" onClick={handleWithdraw}>
          Withdraw
        </button>
        <button className="hero-button btn btn-secondary" onClick={resetForm}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Withdraw;
