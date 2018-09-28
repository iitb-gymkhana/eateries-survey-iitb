const canteensSurveyMapping = require('./canteen-survey.mapping')
const aromasSurveyMapping = require('./aromas-survey.mapping')
const brewandbitesSurveyMapping = require('./brewandbites-survey.mapping')
const campushubSurveyMapping = require('./campushub-survey.mapping')

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

const brewandbitesMappingFunc = {
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
      return brewandbitesSurveyMapping['frequencies'][x]
    }
  },
  vegStarters: {
    id: (x) => {
      return brewandbitesSurveyMapping['vegStarters'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  nonVegStarters: {
    id: (x) => {
      return brewandbitesSurveyMapping['nonVegStarters'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  regularCoffee: {
    id: (x) => {
      return brewandbitesSurveyMapping['regularCoffee'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  blackCoffee: {
    id: (x) => {
      return brewandbitesSurveyMapping['blackCoffee'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  milkshakes: {
    id: (x) => {
      return brewandbitesSurveyMapping['milkshakes'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  sundaes: {
    id: (x) => {
      return brewandbitesSurveyMapping['sundaes'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  nonVegPizzas: {
    id: (x) => {
      return brewandbitesSurveyMapping['nonVegPizzas'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  vegPizzas: {
    id: (x) => {
      return brewandbitesSurveyMapping['vegPizzas'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  sandwiches: {
    id: (x) => {
      return brewandbitesSurveyMapping['sandwiches'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  paninis: {
    id: (x) => {
      return brewandbitesSurveyMapping['paninis'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  wraps: {
    id: (x) => {
      return brewandbitesSurveyMapping['wraps'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  pastas: {
    id: (x) => {
      return brewandbitesSurveyMapping['pastas'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  burgers: {
    id: (x) => {
      return brewandbitesSurveyMapping['burgers'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  extraToppingsOrDips: {
    id: (x) => {
      return brewandbitesSurveyMapping['extraToppingsOrDips'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  regularTea: {
    id: (x) => {
      return brewandbitesSurveyMapping['regularTea'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  greenTea: {
    id: (x) => {
      return brewandbitesSurveyMapping['greenTea'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  infusionTea: {
    id: (x) => {
      return brewandbitesSurveyMapping['infusionTea'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  mojito: {
    id: (x) => {
      return brewandbitesSurveyMapping['mojito'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  slush: {
    id: (x) => {
      return brewandbitesSurveyMapping['slush'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  iceTea: {
    id: (x) => {
      return brewandbitesSurveyMapping['iceTea'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  frappe: {
    id: (x) => {
      return brewandbitesSurveyMapping['frappe'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  brewtastic: {
    id: (x) => {
      return brewandbitesSurveyMapping['brewtastic'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  onTheRocks: {
    id: (x) => {
      return brewandbitesSurveyMapping['onTheRocks'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  hygieneOfItems: {
    id: (x) => {
      return brewandbitesSurveyMapping['hygieneOfItems'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  absenceMenuItemTimes: {
    id: (x) => 'absenceMenuItemTimes',
    value: (x) => {
      return brewandbitesSurveyMapping['absenceMenuItemTimes'][x]
    }
  },
  otherParameters: {
    id: (x) => {
      return brewandbitesSurveyMapping['otherParameters'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
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

const campushubMappingFunc = {
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
      return campushubSurveyMapping['frequencies'][x]
    }
  },
  regularFruitJuice: {
    id: (x) => {
      return campushubSurveyMapping['regularFruitJuice'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  mixedFruitJuice: {
    id: (x) => {
      return campushubSurveyMapping['mixedFruitJuice'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  iceCreamShakes: {
    id: (x) => {
      return campushubSurveyMapping['iceCreamShakes'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  milkShakes: {
    id: (x) => {
      return campushubSurveyMapping['milkShakes'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  fruitMilkShakes: {
    id: (x) => {
      return campushubSurveyMapping['fruitMilkShakes'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  desserts: {
    id: (x) => {
      return campushubSurveyMapping['desserts'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  iceCreamFlavours: {
    id: (x) => {
      return campushubSurveyMapping['iceCreamFlavours'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  hotBeverages: {
    id: (x) => {
      return campushubSurveyMapping['hotBeverages'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  coldBeverages: {
    id: (x) => {
      return campushubSurveyMapping['coldBeverages'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  quickBites: {
    id: (x) => {
      return campushubSurveyMapping['quickBites'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  miniMeals: {
    id: (x) => {
      return campushubSurveyMapping['miniMeals'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  paranthas: {
    id: (x) => {
      return campushubSurveyMapping['paranthas'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  riceMeals: {
    id: (x) => {
      return campushubSurveyMapping['riceMeals'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  maggi: {
    id: (x) => {
      return campushubSurveyMapping['maggi'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  chaat: {
    id: (x) => {
      return campushubSurveyMapping['chaat'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  chinese: {
    id: (x) => {
      return campushubSurveyMapping['chinese'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  extras: {
    id: (x) => {
      return campushubSurveyMapping['extras'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  sandwich: {
    id: (x) => {
      return campushubSurveyMapping['sandwich'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  frankie: {
    id: (x) => {
      return campushubSurveyMapping['frankie'][x]
    },
    value: (x) => {
      return campushubSurveyMapping['ratings'][x]
    }
  },
  hygieneOfItems: {
    id: (x) => {
      return brewandbitesSurveyMapping['hygieneOfItems'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
    }
  },
  absenceMenuItemTimes: {
    id: (x) => 'absenceMenuItemTimes',
    value: (x) => {
      return brewandbitesSurveyMapping['absenceMenuItemTimes'][x]
    }
  },
  otherParameters: {
    id: (x) => {
      return brewandbitesSurveyMapping['otherParameters'][x]
    },
    value: (x) => {
      return brewandbitesSurveyMapping['ratings'][x]
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
  getFreq: getFreq,
  brewandbitesMappingFunc: brewandbitesMappingFunc,
  campushubMappingFunc: campushubMappingFunc
}