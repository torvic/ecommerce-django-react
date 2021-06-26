import { useState, useEffect } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutSummary from '../components/CheckoutSummary';

const Checkout = ({ db, dbOrderItem }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <CheckoutForm />
      </div>

      <div className="col-lg-6">
        {dbOrderItem && db && (
          <CheckoutSummary db={db} dbOrderItem={dbOrderItem} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
