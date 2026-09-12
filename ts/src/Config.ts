
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Benzokolonka',
        slug: "benzokolonka",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://benzokolonka.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      fuel_price: {
      },

    }
  }


  entity = {
    "fuel_price": {
      "fields": [
        {
          "name": "address",
          "short": "Physical address of the station",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the fuel station",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "lastUpdated",
          "short": "Timestamp of last price update",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the fuel station",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "price",
          "short": "Current fuel price",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "priceChange",
          "short": "Price change over the specified period",
          "type": "`$NUMBER`"
        },
        {
          "name": "region",
          "short": "Region ID where the station is located",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "fuel_price",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "ai95",
                    "kind": "query",
                    "name": "fuel",
                    "orig": "fuel",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 7,
                    "kind": "query",
                    "name": "period",
                    "orig": "period",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 4,
                    "kind": "query",
                    "name": "region",
                    "orig": "region",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/home",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "home"
                }
              ],
              "select": {
                "exist": [
                  "fuel",
                  "period",
                  "region"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "home"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

