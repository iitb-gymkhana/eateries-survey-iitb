const AromasSurvey = require('../model/aromasSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const getCsvData = require('../util/surveyFunctions').getCsvData
const aromasMappingFunc = require('../util/surveyFunctions').aromasMappingFunc
const moment = require('moment-timezone')
var fs = require('fs')

module.exports = {
  method: 'GET',
  path: '/aromas',
  options: {
    handler: async (request, h) => {
      const data = await AromasSurvey.find()
      
      const dict = await getSurveyDict(data, aromasMappingFunc)
      
      return dict
    }
  }
}