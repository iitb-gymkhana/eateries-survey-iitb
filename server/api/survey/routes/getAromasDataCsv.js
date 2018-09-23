const AromasSurvey = require('../model/aromasSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const getCsvData = require('../util/surveyFunctions').getCsvData
const aromasMappingFunc = require('../util/surveyFunctions').aromasMappingFunc
const moment = require('moment-timezone')
var fs = require('fs')

module.exports = {
  method: 'GET',
  path: '/aromas/csv',
  options: {
    handler: async (request, h) => {
      const data = await AromasSurvey.find()

      const file_name = `aromas_survey_${moment().format('YYYY-MM-DD-HH-mm')}.csv`

      const dict = await getSurveyDict(data, aromasMappingFunc)
      const csvData = await getCsvData(dict)

      fs.writeFile(`survey_data/${file_name}`, csvData, function(err) {
        if (err) return console.log(err)
      })

      return h.file(`survey_data/${file_name}`, { filename: file_name, mode: 'attachment'} )
    }
  }
}