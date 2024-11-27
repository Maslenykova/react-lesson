import React from 'react';
import moment from 'moment';


const Transaction = ({ from, to, amount, time, rate }) => {
  const formatDate = time => moment(time).format('DD MMM YYYY');
  const formatTime = time => moment(time).format('HH:mm');
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

  console.log(formattedAmount);

  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formattedAmount}</span>
    </li>
  );
};

export default Transaction;