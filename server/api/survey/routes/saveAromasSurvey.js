const AromasSurvey = require('../model/aromasSurveySchema')

module.exports = {
  method: 'POST',
  path: '/aromas',
  options: {
    handler: async (request, h) => {
      await AromasSurvey.create(request.payload)
      
      return { status: 'success' }
    }
  }
}