// const passport = require('passport');
const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

const checkIfAuthenticated = require('../middlewares/checkIfAuthenticated');

module.exports = (app) => {
  app.post('/api/billing', checkIfAuthenticated, async (req, res) => {
    const { token, creditsAmount } = req.body;
    const amount = creditsAmount * 100;

    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'USD',
      description: 'Your Company Description',
      payment_method: token,
      confirm: true,
    });

    req.user.credits += creditsAmount;
    const user = await req.user.save();

    return res.json({ user, payment });
  });
};
