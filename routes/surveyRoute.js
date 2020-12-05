const mongoose = require('mongoose');
const checkIfAuthenticated = require('../middlewares/checkIfAuthenticated');
const templateEmail = require('../services/templateEmail');
const sendMail = require('../services/sendMail');

const Survey = mongoose.model('Survey');

module.exports = (app) => {
  app.get('/api/survey', checkIfAuthenticated, async (req, res) => {
    const allSurveys = await Survey.find({ user: req.user._id });

    if (allSurveys.length === 0) {
      return res.status(404).json({ surveys: [], error: 'No surveys found' });
    }

    return res.json({ surveys: allSurveys });
  });

  app.post('/api/survey', checkIfAuthenticated, async (req, res) => {
    const recipients = req.body.recipients.split(',').map((x) => {
      return {
        email: x.trim(),
      };
    });

    //TODO validate before create a new survey

    const survey = await new Survey({
      user: req.user._id,
      title: req.body.title,
      body: req.body.body,
      subject: req.body.subject,
      recipients,
    }).save();

    const template = templateEmail(survey.body);
    sendMail(survey, template);

    return res.json({ created: true, survey });
  });
};
