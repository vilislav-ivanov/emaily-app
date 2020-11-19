// const passport = require('passport');
const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

module.exports = (app) => {
  app.post('/api/billing', async (req, res) => {
    const { token, creditsAmount } = req.body;
    const amount = creditsAmount * 100;

    stripe.charges.create(
      {
        amount: amount,
        currency: 'usd',
        source: token,
        description: `Paying for ${creditsAmount} credits(${amount})`,
      },
      (err, charge) => {
        if (err) return console.log(err);

        req.user.credits += creditsAmount;
        req.user
          .save()
          .then((user) => {
            return res.json(user);
          })
          .catch((err) => console.log(err));
      }
    );
  });
};
