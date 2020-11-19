// const passport = require('passport');
const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

module.exports = (app) => {
  app.post('/api/billing', async (req, res) => {
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

    // stripe.charges.create(
    //   {
    //     amount: amount,
    //     currency: 'usd',
    //     source: token,
    //     description: `Paying for ${creditsAmount} credits(${amount})`,
    //   },
    //   (err, charge) => {
    //     if (err) return console.log(err);
    //   }
    // );
  });
};
