const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const templateEmail = require('../services/templateEmail');
const sendMail = require('../services/sendMail');

const Survey = mongoose.model('Survey');

module.exports = (app) => {
  app.get('/api/survey', requireLogin, async (req, res) => {
    const allSurveys = await Survey.find({ user: req.user._id });

    if (allSurveys.length === 0) {
      return res.status(404).json({ surveys: [], error: 'No surveys found' });
    }

    return res.json({ surveys: allSurveys });
  });

  app.post('/api/survey', requireLogin, requireCredits, async (req, res) => {
    const recipients = req.body.recipients.split(',').map((x) => {
      return {
        email: x.trim(),
      };
    });

    //TODO validate before create a new survey

    const survey = new Survey({
      user: req.user._id,
      title: req.body.title,
      body: req.body.body,
      subject: req.body.subject,
      recipients,
    });

    const template = templateEmail(survey.body);
    sendMail(survey, template);

    req.user.credits -= 1;
    const user = await req.user.save();

    await survey.save();

    return res.json({ user, survey });
  });
};
