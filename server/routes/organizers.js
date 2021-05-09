const express = require('express');
const router = express.Router()

router.get('/:organizerId/pickups', (req, res) => {
 // TODO: connect to firebase DB to get pickups
 const pickups = [
  {
   field: 'Village Park',
   address: {
    street: '6161 S Jasper Way',
    city: 'Centennial',
    state: 'CO',
    zip: '80016'
   },
   time: '12:00 pm',
   day: 'Sunday',
   contact: 'Jordan W. Alves'
  },
  {
   field: 'Inifinity Park',
   address: {
    street: '4599 E Tennessee Ave',
    city: 'Denver',
    state: 'CO',
    zip: '80246'
   },
   time: '5:30 pm',
   day: 'Friday',
   contact: 'Edgar Barajas',
  }
 ]
 res.send(pickups)
})

router.post('/:organizerId/create_pickup', (req, res) => {
 // TODO: connect to firebase DB to save pickup for organizer
 res.send(req.body)
})

module.exports = router
