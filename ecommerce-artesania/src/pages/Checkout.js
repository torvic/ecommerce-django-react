import CheckoutForm from '../components/CheckoutForm';
import CheckoutSummary from '../components/CheckoutSummary';

const Checkout = () => {
  return (
    <div className="row container">
      <div className="col-lg-6">
        <CheckoutForm />
      </div>

      <div className="col-lg-6">
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default Checkout;
