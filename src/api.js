const express = require('express')
const serverless = require('serverless-http')

//

const fetchHLEvents = require('./plugins/hlevents')
const fetchOdumEvents = require('./plugins/odumevents')

//

const fetchEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();
  return [...hlevents, ...odumEvents];
}

const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
  const events = await fetchEvents()
  console.log(events)
  res.send(events)
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
