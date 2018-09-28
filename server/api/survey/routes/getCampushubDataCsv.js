const CampushubSruvey = require('../model/campusHubSurveySchema')
const getSurveyDict = require('../util/surveyFunctions').getSurveyDict
const campushubMappingFunc = require('../util/surveyFunctions').campushubMappingFunc
const getCsvData = require('../util/surveyFunctions').getCsvData
const moment = require('moment-timezone')
var fs = require('fs')

module.exports = {
  method: 'GET',
  path: '/campushub/csv',
  options: {
    handler: async (request, h) => {
      const data = await CampushubSruvey.find()

      const file_name = `campushub_${moment().format('YYYY-MM-DD-HH-mm')}.csv`

      const dict = await getSurveyDict(data, campushubMappingFunc)
      const csvData = await getCsvData(dict)

      fs.writeFile(`survey_data/${file_name}`, csvData, function(err) {
        if (err) return console.log(err)
      })

      return h.file(`survey_data/${file_name}`, { filename: file_name, mode: 'attachment'} )
    }
  }
}