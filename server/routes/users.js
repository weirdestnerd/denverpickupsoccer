const express = require('express');
const userRouter = express.Router();

userRouter.post('/register', (request, response) => {
  const succesful = true;
  console.log(request.body);
  if(succesful) {
    response.status(200).send();
  } else {
    response.status(500).send();
  }
})

module.exports = userRouter;