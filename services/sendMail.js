const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

function sendMail(message) {
  message.from = 'ravara128@gmail.com';
  return transport.sendMail(message);
};

module.exports = sendMail;
