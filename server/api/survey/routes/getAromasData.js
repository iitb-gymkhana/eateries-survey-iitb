const AromasSurvey = require('../model/aromasSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const aromasMappingFunc = require('../util/surveyFunctions').aromasMappingFunc
const getFreq = require('../util/surveyFunctions').getFreq

module.exports = {
  method: 'GET',
  path: '/aromas',
  options: {
    handler: async (request, h) => {
      const data = await AromasSurvey.find()

      const dict = await getSurveyDict(data, aromasMappingFunc)

      const fields = Object.keys(dict)
      for (let i = 0; i < fields.length; i++) {
        dict[fields[i]] = getFreq(dict[fields[i]])
      }
      
      return dict
    }
  }
}