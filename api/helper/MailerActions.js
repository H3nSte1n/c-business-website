const nodemailer = require('nodemailer')
require('dotenv').config()

export class MailerActions {
  static sendMail (name, email, msg) {
    const transporter = nodemailer.createTransport({
      // sendmail: true,
      // newline: 'unix',
      // path: '/usr/sbin/sendmail'
      service: 'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PW
      }
    })
    transporter.sendMail({
      from: process.env.EMAIL,
      to: 'Henrysteinhauer@t-online.de',
      subject: 'New contact form message',
      text: msg
    })
  }
}
