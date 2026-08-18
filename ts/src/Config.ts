
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Benzokolonka',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "lastUpdated",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "price",
          "type": "`$NUMBER`"
        },
        {
          "name": "priceChange",
          "type": "`$NUMBER`"
        },
        {
          "name": "region",
          "type": "`$INTEGER`"
        }
      ],
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
              "parts": [
                "api",
                "home"
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
              }
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
  config
}

