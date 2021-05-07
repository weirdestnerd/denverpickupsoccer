/*
    This is the entry file for the server.
 */

// package imports
const express = require('express');
require('dotenv').config() // load environment variables
const cookieParser = require('cookie-parser');
const router = express.Router();
const cors = require('cors')

// routes imports
const userRouter = require('./routes/users.js')

// ExpressJS app setup
const app = express();
const port = process.env.PORT

// list of endpoints allowed to make requests to this backend via CORS
const whitelist = ['http://localhost:3001', 'https://denverpickupsoccer.web.app']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

// setup middlewares
app.use(cors(corsOptions));
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('port', port)

router.get('/api', (request, response) => {
  response.send({ message: "This is the beginning" })
})

app.use('/api/users', userRouter)
app.listen(port, () => console.log(`App listening at port ${port}`))
