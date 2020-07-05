import { Validation } from './helper/Validation'
import { MailerActions } from './helper/MailerActions'
import express from 'express'

// module.exports = (req, res) => {
//   const attributes = ['name', 'email', 'msg'] // Our three form fields, all required
//   console.log('test');
//   res.send('test')
//   const sanitizedAttributes = attributes.map(n => Validation.validateAndSanitize(n, req.body[n]))
//   console.log(...sanitizedAttributes);
//   res.write(...sanitizedAttributes);

//   const someInvalid = sanitizedAttributes.some(r => !r)

//   if (someInvalid) {
//     // Throw a 422 with a neat error message if validation failed
//     return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
//   }

//   MailerActions.sendMail(...sanitizedAttributes)
//   res.status(200).json({ 'message': 'OH YEAH' })
// }
const app = express()
app.use(express.json())

// app.get("/", (req, res) => {
//   res.send('test');
// })

app.post('/', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required
  console.log('testasda', req.body);
  const sanitizedAttributes = attributes.map(n => Validation.validateAndSanitize(n, req.body[n]))

  const someInvalid = sanitizedAttributes.some(r => !r)
  console.log('validate:', someInvalid)
  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }
  console.log('valid', ...sanitizedAttributes)
  MailerActions.sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})

export default {
  path: 'unternehmenscoaching',
  handler: app
}
