# Benzokolonka SDK configuration


def make_config():
    return {
        "main": {
            "name": "Benzokolonka",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://benzokolonka.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "fuel_price": {},
            },
        },
        "entity": {
      "fuel_price": {
        "fields": [
          {
            "active": True,
            "name": "address",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "price",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "price_change",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "region",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
        ],
        "name": "fuel_price",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "ai95",
                      "kind": "query",
                      "name": "fuel",
                      "orig": "fuel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 7,
                      "kind": "query",
                      "name": "period",
                      "orig": "period",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 4,
                      "kind": "query",
                      "name": "region",
                      "orig": "region",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/home",
                "parts": [
                  "api",
                  "home",
                ],
                "select": {
                  "exist": [
                    "fuel",
                    "period",
                    "region",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
