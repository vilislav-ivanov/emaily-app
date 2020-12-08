const mongoose = require('mongoose');
const Survey = mongoose.model('Survey');

module.exports = async (req, res, next) => {
  const surveyId = req.params.surveyId;
  const survey = await Survey.findOne({ _id: surveyId });

  if (survey) {
    if (survey.user.toString() !== req.user.id) {
      return res.status(401);
    }
    req.survey = survey;
    next();
  } else {
    return res.status(404);
  }
};
