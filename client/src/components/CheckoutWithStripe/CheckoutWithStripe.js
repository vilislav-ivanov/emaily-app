import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { proceedStripeBilling } from '../../actions/auth';

// similar functions can be defined to compute total price, email of the user, etc.

class CheckoutWithStripe extends React.Component {
  onToken = (token) => {
    this.props.proceedStripeBilling(token.id, 5);
  };

  render() {
    return (
      <StripeCheckout
        amount={5}
        name="STRIPE_INTEGRATION"
        // functions defined above can be used to add more information while making the API call.
        // description={`Order of ${computeQuantity(cart)} items!`}
        // image="LINKTOIMAGE"
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        currency="USD"
        email="USER_EMAIL"
        token={this.onToken}
      />
    );
  }
}

export default connect(null, { proceedStripeBilling })(CheckoutWithStripe);
