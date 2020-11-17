const nodemailer = require("nodemailer");

const mail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
});

const sendSingleEmail = async (
  {to = "ibrahima.niass.ch@gmail.com",
  subject = "Sending Email via Node.js",
  text = "That was easy cool!"}
) => {
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to,
    subject,
    text,
  };

  const info = await mail.sendMail(mailOptions);
  return info;
};

module.exports.sendSingleEmail = sendSingleEmail; 