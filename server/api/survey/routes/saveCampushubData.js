const CampushubSurvey = require('../model/campusHubSurveySchema')

module.exports = {
  method: 'POST',
  path: '/campushub',
  options: {
    handler: async (request, h) => {
      await CampushubSurvey.create(request.payload)
      
      return { status: 'success' }
    }
  }
}