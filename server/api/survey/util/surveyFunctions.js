const canteensSurveyMapping = require('./canteen-survey.mapping')
const aromasSurveyMapping = require('./aromas-survey.mapping')

async function getSurveyDict(data, mappingFunc) {
  const keys = Object.keys(mappingFunc);
  var dict = {}
  var i, j, k

  for (i = 0; i < data.length; i++) {
    const d = data[i]

    for (j = 0; j < keys.length; j++) {
      const key = keys[j]

      for (k = 0; k < d[key].length; k++) {
        const id = d[key][k]['id']
        const value = d[key][k]['value']

        const _key = mappingFunc[key].id(id)
        if (!(_key in dict)) {
          dict[_key] = []
        }
        dict[_key].push(mappingFunc[key].value(value))
      }
    }
  }

  return dict;
}

const canteensMappingFunc = {
  name: {
    id: (x) => 'name',
    value: (x) => x
  },
  phoneNumber: {
    id: (x) => 'phoneNumber',
    value: (x) => x
  },
  email: {
    id: (x) => 'email',
    value: (x) => x
  },
  hostel: {
    id: (x) => 'hostel',
    value: (x) => {
      return canteensSurveyMapping['hostels'][x]
    }
  },
  frequency: {
    id: (x) => 'frequency',
    value: (x) => {
      return canteensSurveyMapping['frequencies'][x]
    }
  },
  foodItems: {
    id: (x) => {
      return canteensSurveyMapping['foodItems'][x]
    },
    value: (x) => {
      return canteensSurveyMapping['ratings'][x]
    }
  },
  hygieneOfItems: {
    id: (x) => {
      return canteensSurveyMapping['hygieneOfItems'][x]
    },
    value: (x) => {
      return canteensSurveyMapping['ratings'][x]
    }
  },
  absenceMenuItemTimes: {
    id: (x) => 'absenceMenuItemTimes',
    value: (x) => {
      return canteensSurveyMapping['absenceMenuItemTimes'][x]
    }
  },
  otherParameters: {
    id: (x) => {
      return canteensSurveyMapping['otherParameters'][x]
    },
    value: (x) => {
      return canteensSurveyMapping['ratings'][x]
    }
  },
  otherSuggestions: {
    id: (x) => 'otherSuggestions',
    value: (x) => x
  },
  submittedOn: {
    id: (x) => 'submittedOn',
    value: (x) => x
  }
}

const aromasMappingFunc = {
  name: {
    id: (x) => 'name',
    value: (x) => x
  },
  phoneNumber: {
    id: (x) => 'phoneNumber',
    value: (x) => x
  },
  email: {
    id: (x) => 'email',
    value: (x) => x
  },
  frequency: {
    id: (x) => 'frequency',
    value: (x) => {
      return aromasSurveyMapping['frequencies'][x]
    }
  },
  breakfastItems: {
    id: (x) => {
      return aromasSurveyMapping['breakfastItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  appetizersItems: {
    id: (x) => {
      return aromasSurveyMapping['appetizersItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  biryaniVegItems: {
    id: (x) => {
      return aromasSurveyMapping['biryaniVegItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  biryaniNonVegItems: {
    id: (x) => {
      return aromasSurveyMapping['biryaniNonVegItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  tandoorItems: {
    id: (x) => {
      return aromasSurveyMapping['tandoorItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  vegSpecialDishesItems: {
    id: (x) => {
      return aromasSurveyMapping['vegSpecialDishesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  paneerSpecialDishesItems: {
    id: (x) => {
      return aromasSurveyMapping['paneerSpecialDishesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  chickenSpecialDishesItems: {
    id: (x) => {
      return aromasSurveyMapping['chickenSpecialDishesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  fishDishesItems: {
    id: (x) => {
      return aromasSurveyMapping['fishDishesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  vegRiceAndNoodlesItems: {
    id: (x) => {
      return aromasSurveyMapping['vegRiceAndNoodlesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  nonVegRiceAndNoodlesItems: {
    id: (x) => {
      return aromasSurveyMapping['nonVegRiceAndNoodlesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  breadBasketItems: {
    id: (x) => {
      return aromasSurveyMapping['breadBasketItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  beveragesAndJuicesItems: {
    id: (x) => {
      return aromasSurveyMapping['beveragesAndJuicesItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  dessertItems: {
    id: (x) => {
      return aromasSurveyMapping['dessertItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  hygieneOfItems: {
    id: (x) => {
      return aromasSurveyMapping['hygieneOfItems'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  absenceMenuItemTimes: {
    id: (x) => 'absenceMenuItemTimes',
    value: (x) => {
      return aromasSurveyMapping['absenceMenuItemTimes'][x]
    }
  },
  otherParameters: {
    id: (x) => {
      return aromasSurveyMapping['otherParameters'][x]
    },
    value: (x) => {
      return aromasSurveyMapping['ratings'][x]
    }
  },
  otherSuggestions: {
    id: (x) => 'otherSuggestions',
    value: (x) => x
  },
  submittedOn: {
    id: (x) => 'submittedOn',
    value: (x) => x
  }
}

async function getCsvData(dict) {
  fields = Object.keys(dict);
  
  if (fields.length == 0) return []

  var csvArrays = []
  
  for (i = 0; i < fields.length; i++) {
    csvArrays.push(dict[fields[i]])
  }

  csvArrays = csvArrays[0].map((x, i) => csvArrays.map(x => x[i]));
  csvArrays.unshift(fields);

  for (i = 0; i < csvArrays.length; i++) {
    csvArrays[i] = '"' + csvArrays[i].join('","') + '"';
  }
  csvData = csvArrays.join('\n');

  return csvData
}

function getFreq(data) {
  const dict = {}

  for (let i = 0; i < data.length; i++) {
    const val = dict[data[i]]
    dict[data[i]] = val ? val + 1 : 1
  }

  return dict
}

module.exports = {
  getSurveyDict: getSurveyDict,
  getCsvData: getCsvData,
  canteensMappingFunc: canteensMappingFunc,
  aromasMappingFunc: aromasMappingFunc,
  getFreq: getFreq
}