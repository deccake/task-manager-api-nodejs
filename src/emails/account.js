const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  console.log("in welcome mail");
  sgMail.send({
    to: email,
    from: "amolw211@gmail.com",
    subject: "Thanks For Joining!",
    text: `Welcome to the app, ${name}. Let me know how you get along with our app`,
  });
};

const sendCancelationMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amolw211@gmail.com",
    subject: "Sorry to you go!",
    text: `Goodby, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = { welcomeMail: sendWelcomeMail, cancelMail: sendCancelationMail };
