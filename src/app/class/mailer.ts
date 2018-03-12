const nodemailer = require('nodemailer');

var _transporterDev = nodemailer.createTransport({
  host: 'smtp.1blu.de',
  port: 587,
  secure: false,
  auth: {
    user: 'u258169_0-reactive',
    pass: 'T3sTreal'
  }
});
export class Mailer {

  sendDev(subject: string, message: string, html: string) {
    this.sendMail(subject, message, html, 'reactive@djlatscho.com', 'nilsleistner@me.com', _transporterDev)
  }

  sendMail(subject: string, message: string, html: string, from: string, to: string, transporter: any) {
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: message,
      html: html
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });
  }
}
