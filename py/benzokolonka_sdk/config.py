# Benzokolonka SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "address",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "lastUpdated",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "price",
            "type": "`$NUMBER`",
          },
          {
            "name": "priceChange",
            "type": "`$NUMBER`",
          },
          {
            "name": "region",
            "type": "`$INTEGER`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 7,
                      "kind": "query",
                      "name": "period",
                      "orig": "period",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 4,
                      "kind": "query",
                      "name": "region",
                      "orig": "region",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
