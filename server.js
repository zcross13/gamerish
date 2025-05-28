require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const app = express()
// const cors = require('cors')

// Security middleware
app.use(helmet())
app.use(compression())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Body parsing middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
  console.log('Connected to MongoDB')
})
/* Start Config */

/* End Config */

/* Start Middleware */
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/games', require('./controllers/routeController.js'))

/* End Middleware */

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
