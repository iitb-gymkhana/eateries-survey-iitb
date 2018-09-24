const BrewandbitesSurvey = require('../model/brewandbitesSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const brewandbitesMappingFunc = require('../util/surveyFunctions').brewandbitesMappingFunc
const getFreq = require('../util/surveyFunctions').getFreq

module.exports = {
  method: 'GET',
  path: '/brewandbites',
  options: {
    handler: async (request, h) => {
      const data = await BrewandbitesSurvey.find()

      const dict = await getSurveyDict(data, brewandbitesMappingFunc)

      const fields = Object.keys(dict)
      for (let i = 0; i < fields.length; i++) {
        dict[fields[i]] = getFreq(dict[fields[i]])
      }
      
      return dict
    }
  }
}