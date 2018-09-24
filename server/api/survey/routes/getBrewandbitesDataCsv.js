const BrewandbitesSurvey = require('../model/brewandbitesSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const brewandbitesMappingFunc = require('../util/surveyFunctions').brewandbitesMappingFunc
const getCsvData = require('../util/surveyFunctions').getCsvData
const moment = require('moment-timezone')
var fs = require('fs')

module.exports = {
  method: 'GET',
  path: '/brewandbites/csv',
  options: {
    handler: async (request, h) => {
      const data = await BrewandbitesSurvey.find()

      const file_name = `brewandbites_${moment().format('YYYY-MM-DD-HH-mm')}.csv`

      const dict = await getSurveyDict(data, brewandbitesMappingFunc)
      const csvData = await getCsvData(dict)

      fs.writeFile(`survey_data/${file_name}`, csvData, function(err) {
        if (err) return console.log(err)
      })

      return h.file(`survey_data/${file_name}`, { filename: file_name, mode: 'attachment'} )
    }
  }
}