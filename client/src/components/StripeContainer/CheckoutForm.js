import React from 'react';

import { connect } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { proceedStripeBilling } from '../../actions/auth';

const CheckoutForm = ({ proceedStripeBilling }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod);

      proceedStripeBilling(paymentMethod.id, 200);
      //send token to backend here
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button
        className="waves-effect waves-light btn-small"
        style={{ marginTop: '16px' }}
      >
        <i class="material-icons right">payment</i>
        Add Credits
      </button>
    </form>
  );
};

export default connect(null, { proceedStripeBilling })(CheckoutForm);
