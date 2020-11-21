module.exports = (app) => {
  require('./homeRoute')(app);
  require('./authRoute')(app);
  require('./billingRoute')(app);
  require('./surveyRoute')(app);
};
