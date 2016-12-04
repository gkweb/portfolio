require('dotenv').config()
const path = require('path')
const util = require('util')
const bodyParser = require('body-parser')
const express = require('express')
const RateLimit = require('express-rate-limit')
const expressValidator = require('express-validator')
const app = express()
const mailer = require('express-mailer')
const content = require('./data/content')

// Express Mailer setup
// https://github.com/RGBboy/express-mailer
mailer.extend(app, {
  from: 'no-reply@gladekettle.com.au',
  host: process.env.SMPT_HOST, // hostname process.env.DB_HOST,
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASSWORD
  }
})

// Set contact form rate limit -- To avoid those robots
let limiter = new RateLimit({
  windowMs: (15 * 60 * 1000), // 15 minutes in ms
  max: 9999, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
})

app.set('view engine', 'pug')
app.enable('trust proxy') // Proxy trust -- For aws / some hosting providers

// Set views path
app.set('views', path.join(__dirname, 'components'))

app.use(bodyParser.json())

// Add custom validator for challenge
app.use(expressValidator({customValidators: {
  isChallenge: function (value) {
    return (value === '13')
  }
}}))

//  Request limit - apply to all requests
app.use('/contact', limiter)
// Expose directories for access by client
app.use('/components', express.static(path.join(__dirname, 'components')))
app.use('/bundle', express.static(path.join(__dirname, 'bundle')))
app.use('/content', express.static(path.join(__dirname, 'content')))

// One page app
app.get('/', function (req, res) {
  res.render('app/index', content)
})

// One page app
app.get('/mail', function (req, res) {
  app.mailer.send('email', {
    to: 'gladekettle@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Test Email', // REQUIRED.
    otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  }, function (err) {
    if (err) {
      // handle error
      console.log(err)
      res.send('There was an error sending the email')
      return
    }
    res.send('Email Sent')
  })
})

// Contact form posts
app.post('/contact', function (req, res) {
  console.log(req.body)
  console.log(!req.body)

  // Check name
  req.checkBody('name', 'Name is a required field').isAlpha()
  // Check email
  req.checkBody('email', 'Email is a required field').isEmail()
  // Check challenge
  req.checkBody('challenge', 'Challenge is a required field').isChallenge()
  // Check message
  req.checkBody('message', 'Message is a required field').len(2, 100)

  // Alternatively use `var result = yield req.getValidationResult();`
  // when using generators e.g. with co-express
  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {

      let r = {
        success: false,
        message: 'Error submitting form :(, Please check that all fields are valid.',
        errors: result.array()
      }

      res.status(201).json(r)
      return
    }
    // Return succes state
    res.json({ success: true, message: 'Succesfully submitted, Thankyou! :)', errors: false })
  })
})

app.listen(6969, function () {
  console.log('Example app listening on port 6969!')
})
