const sgMail = require('@sendgrid/mail');
const { sendgridKey } = require('../config/keys');

module.exports = async ({ subject, recipients }, templateEmail) => {
  sgMail.setApiKey(sendgridKey);

  const msg = {
    to: recipients.map(({ email }) => email),
    from: 'vilislav.ivanov91@abv.bg',
    subject,
    html: templateEmail,
    text: 'text message',
  };

  sgMail.sendMultiple(msg).catch(console.error);
};
