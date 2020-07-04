const nodemailer = require('nodemailer')
require('dotenv').config()

export class MailerActions {
  sendMail (name, email, msg) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.PW
      }
    })
    transporter.sendMail({
      from: email,
      to: 'Henrysteinhauer@t-online.de',
      subject: 'New contact form message',
      text: msg
    })
  }
}
