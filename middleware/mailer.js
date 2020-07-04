import express from 'express'
import { Validation } from './helper/Validation'
import { MailerActions } from './helper/MailerActions'

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => Validation.validateAndSanitize(n, req.body[n]))

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  MailerActions.sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})

export default {
  path: '/api/contact',
  handler: app
}
