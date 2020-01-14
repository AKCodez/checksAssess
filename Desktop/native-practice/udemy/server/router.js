const router = require('express').Router()
const controllers = require('./controllers.js')

router.route('/locations')
  .get(controllers.getCoordinates)
  .post(controllers.addCoordinates)
  
module.exports = router