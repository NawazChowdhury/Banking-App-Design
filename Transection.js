import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

const Transection = () => {

    const [transactions, setTransactions] = useState([]);
  const [accountBalances, setAccountBalances] = useState({}); // Track balances per account
  const [formType, setFormType] = useState(null); // To toggle between Deposit and Withdraw forms

  // Handle deposit or withdrawal based on account number
  const handleTransaction = (accountNumber, amount, type) => {
    const amt = parseFloat(amount);

    // Ensure valid inputs
    if (!accountNumber || isNaN(amt) || amt <= 0) {
      alert("Please enter a valid account number and amount.");
      return;
    }

    const currentBalance = accountBalances[accountNumber] || 0; // Get current balance of the account

    if (type === 'Withdraw' && currentBalance < amt) {
      alert("Insufficient balance");
      return;
    }

    // Calculate new balance
    const newBalance = type === 'Deposit' ? currentBalance + amt : currentBalance - amt;

    // Update the accountBalances state
    setAccountBalances({
      ...accountBalances,
      [accountNumber]: newBalance,
    });

    // Add transaction to the history
    const newTransaction = { 
      accountNumber, 
      amount: amt, 
      type, 
      balance: newBalance 
    };
    setTransactions([...transactions, newTransaction]);
  };


  return (
    <div>

<div className="container mt-4">
      <h1 className="text-center">Banking System</h1>
      <div className="d-flex justify-content-center mb-4">
        <button className="hero-button btn btn-primary me-2" onClick={() => setFormType('Deposit')}>
          Deposit
        </button>
        <button className="hero-button btn btn-danger" onClick={() => setFormType('Withdraw')}>
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col-md-6 mx-auto">
          {formType === 'Deposit' && (
            <Deposit onDeposit={(accountNumber, amount) => handleTransaction(accountNumber, amount, 'Deposit')} />
          )}
          {formType === 'Withdraw' && (
            <Withdraw onWithdraw={(accountNumber, amount) => handleTransaction(accountNumber, amount, 'Withdraw')} />
          )}
        </div>
      </div>

      <h2 className="mt-4">Transaction History</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Balance After Transaction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.accountNumber}</td>
              <td>{txn.amount}</td>
              <td>{txn.type}</td>
              <td>{txn.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    

 
    <section id="footer">
      <div className="container">
        <div className="row text-left text-xs-left text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Videos</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Videos</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
              <li><a href="https://www.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i> Imprint</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u><a href="#">CIBC Bank</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">
              © All right Reserved. <a className="text-green ml-2" href="" target="_blank">Nawaz Chowdhury</a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  
 

    </div>
 

  );
  
 
};

export default Transection;
