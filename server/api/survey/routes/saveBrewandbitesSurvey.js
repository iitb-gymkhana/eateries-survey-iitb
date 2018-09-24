const BrewandBitesSurvey = require('../model/brewandbitesSurveySchema')

module.exports = {
  method: 'POST',
  path: '/brewandbites',
  options: {
    handler: async (request, h) => {
      await BrewandBitesSurvey.create(request.payload)
      
      return { status: 'success' }
    }
  }
}