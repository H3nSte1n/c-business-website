const nodemailer = require('nodemailer')
require('dotenv').config()

export class MailerActions {
  sendMail (name, email, msg) {
    console.log(name, email, msg);
    const transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    })
    transporter.sendMail({
      from: email,
      to: 'Henrysteinhauer@t-online.de',
      subject: 'New contact form message',
      text: msg
    })
    console.log(name, email, msg);
  }
}
