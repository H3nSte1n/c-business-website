const nodemailer = require('nodemailer');
const ReplaceAttribute = require('./ReplaceAttribute');
const TranspiledFiles = require('./TranspileFiles');


require('dotenv').config()

const htmlFiles = {
  ext: '.html',
  files: [
    '../../mailings/confirmationMailing/index.html',
    '../../mailings/customerMailing/index.html'
  ]
}

const txtFiles = {
  ext: '.txt',
  files: [
    '../../mailings/confirmationMailing/index.txt',
    '../../mailings/customerMailing/index.txt'
  ]
}

const [textConfirmationMailing, textlCustomerMailing] = TranspiledFiles.transpile(txtFiles.ext, txtFiles.files);
const [htmlConfirmationMailing, htmlCustomerMailing] = TranspiledFiles.transpile(htmlFiles.ext, htmlFiles.files);

export class MailerActions {
  static sendMail (name, email, msg) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.strato.de',
      port: '465',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PW
      }
    })
    transporter.sendMail({
      from: process.env.EMAIL,
      to: 'hallo@claudia-eck.de',
      subject: `Kundenmail, ${name}`,
      text: ReplaceAttribute.replace(textlCustomerMailing, ['msg', 'name', 'email'], [msg, name, email]),
      html: ReplaceAttribute.replace(htmlCustomerMailing, ['msg', 'name', 'email'], [msg, name, email]),
      attachments: [
        {
          filename: 'logo.png',
          path: `./mailings/customerMailing/images/logo.png`,
          cid: 'logo-id'
        },
        {
          filename: 'logo-claudia-eck.png',
          path: `./mailings/customerMailing/images/logo-claudia-eck.png`,
          cid: 'signature-id'
        }
      ]
    })

    transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Bestätigungsmail Claudia Eck',
      text: ReplaceAttribute.replace(textConfirmationMailing, 'name', name),
      html: ReplaceAttribute.replace(htmlConfirmationMailing, 'name', name),
      attachments: [
        {
        filename: 'logo.png',
        path: `./mailings/confirmationMailing/images/logo.png`,
        cid: 'logo-id'
      },
      {
        filename: 'logo-claudia-eck.png',
        path: `./mailings/confirmationMailing/images/logo-claudia-eck.png`,
        cid: 'signature-id'
      }
    ]
    })
  }
}
