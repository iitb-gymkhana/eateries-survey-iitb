const CanteensSurvey = require('../model/canteensSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const getCsvData = require('../util/surveyFunctions').getCsvData
const canteensMappingFunc = require('../util/surveyFunctions').canteensMappingFunc
const moment = require('moment-timezone')
var fs = require('fs')

module.exports = {
  method: 'GET',
  path: '/canteens/csv',
  options: {
    handler: async (request, h) => {
      const data = await CanteensSurvey.find()

      const file_name = `canteens_survey_${moment().format('YYYY-MM-DD-HH-mm')}.csv`
      
      const dict = await getSurveyDict(data, canteensMappingFunc)
      const csvData = await getCsvData(dict)

      fs.writeFile(`survey_data/${file_name}`, csvData, function(err) {
        if (err) return console.log(err);
      })
    
      return h.file(`survey_data/${file_name}`, { filename: file_name, mode: 'attachment' })
    }
  }
}