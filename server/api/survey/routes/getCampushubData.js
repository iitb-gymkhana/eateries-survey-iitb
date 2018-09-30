const CampusHubSurvey = require('../model/campusHubSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const campushubMappingFunc = require('../util/surveyFunctions').campushubMappingFunc
const getFreq = require('../util/surveyFunctions').getFreq

module.exports = {
  method: 'GET',
  path: '/campushub',
  options: {
    handler: async (request, h) => {
      const data = await CampusHubSurvey.find()

      const dict = await getSurveyDict(data, campushubMappingFunc)

      const fields = Object.keys(dict)
      for (let i = 0; i < fields.length; i++) {
        dict[fields[i]] = getFreq(dict[fields[i]])
      }
      
      return dict
    }
  }
}