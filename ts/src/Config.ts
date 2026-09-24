
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Address",
          "type": "`$STRING`",
          "short": "Physical address of the station"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "short": "Unique identifier for the fuel station"
        },
        {
          "name": "lastUpdated",
          "title": "Last Updated",
          "type": "`$STRING`",
          "short": "Timestamp of last price update",
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the fuel station"
        },
        {
          "name": "price",
          "title": "Price",
          "type": "`$NUMBER`",
          "short": "Current fuel price",
          "format": "float"
        },
        {
          "name": "priceChange",
          "title": "Price Change",
          "type": "`$NUMBER`",
          "short": "Price change over the specified period",
          "format": "float"
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$INTEGER`",
          "short": "Region ID where the station is located"
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
              "parts": [
                "api",
                "home"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "fuel",
                    "orig": "fuel",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "ai95"
                  },
                  {
                    "name": "period",
                    "orig": "period",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 7
                  },
                  {
                    "name": "region",
                    "orig": "region",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 4
                  }
                ]
              },
              "select": {
                "exist": [
                  "fuel",
                  "period",
                  "region"
                ]
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
  config,
  FEATURE_PLUGINS,
}

