import express from 'express'
import { Validation } from './helper/Validation'
import { MailerActions } from './helper/MailerActions'

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required

  const sanitizedAttributes = attributes.map(n => Validation.validateAndSanitize(n, req.body[n]))

  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  MailerActions.sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})
