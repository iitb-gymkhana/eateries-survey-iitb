const CanteensSurvey = require('../model/canteensSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const canteensMappingFunc = require('../util/surveyFunctions').canteensMappingFunc
const getFreq = require('../util/surveyFunctions').getFreq

module.exports = {
  method: 'GET',
  path: '/canteens/{hostel}',
  options: {
    handler: async (request, h) => {
      const data = await CanteensSurvey.find({ 'hostel.value': request.params.hostel })

      const dict = await getSurveyDict(data, canteensMappingFunc)
      
      const fields = Object.keys(dict)
      for (let i = 0; i < fields.length; i++) {
        dict[fields[i]] = getFreq(dict[fields[i]])
      }
      
      return dict
    }
  }
}