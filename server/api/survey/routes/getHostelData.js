const CanteensSurvey = require('../model/canteensSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const getCsvData = require('../util/surveyFunctions').getCsvData
const canteensMappingFunc = require('../util/surveyFunctions').canteensMappingFunc
const moment = require('moment-timezone')
var fs = require('fs')

module.exports = {
  method: 'GET',
  path: '/canteens/{hostel}',
  options: {
    handler: async (request, h) => {
      const data = await CanteensSurvey.find({ 'hostel.value': request.params.hostel })

      const dict = await getSurveyDict(data, canteensMappingFunc)
      
      return dict
    }
  }
}