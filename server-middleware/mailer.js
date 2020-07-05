import express from 'express'
import { Validation } from './helper/Validation'
import { MailerActions } from './helper/MailerActions'

const app = express()
app.use(express.json())

app.post('/unternehmenscoaching', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required
  console.log('test');
  res.send('test')
  const sanitizedAttributes = attributes.map(n => Validation.validateAndSanitize(n, req.body[n]))
  console.log(...sanitizedAttributes);
  res.write(...sanitizedAttributes);

  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  MailerActions.sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})

export default {
  path: '~/server-middleware/mailer',
  handler: app
}
