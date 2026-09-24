-- Benzokolonka SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Benzokolonka",
      slug = "benzokolonka",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://benzokolonka.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["fuel_price"] = {},
      },
    },
    entity = {
      ["fuel_price"] = {
        ["fields"] = {
          {
            ["name"] = "address",
            ["title"] = "Address",
            ["type"] = "`$STRING`",
            ["short"] = "Physical address of the station",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "Unique identifier for the fuel station",
          },
          {
            ["name"] = "lastUpdated",
            ["title"] = "Last Updated",
            ["type"] = "`$STRING`",
            ["short"] = "Timestamp of last price update",
            ["format"] = "date-time",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "Name of the fuel station",
          },
          {
            ["name"] = "price",
            ["title"] = "Price",
            ["type"] = "`$NUMBER`",
            ["short"] = "Current fuel price",
            ["format"] = "float",
          },
          {
            ["name"] = "priceChange",
            ["title"] = "Price Change",
            ["type"] = "`$NUMBER`",
            ["short"] = "Price change over the specified period",
            ["format"] = "float",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$INTEGER`",
            ["short"] = "Region ID where the station is located",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "fuel_price",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/home",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "home",
                  },
                },
                ["parts"] = {
                  "api",
                  "home",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "fuel",
                      ["orig"] = "fuel",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "ai95",
                    },
                    {
                      ["name"] = "period",
                      ["orig"] = "period",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 7,
                    },
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 4,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "fuel",
                    "period",
                    "region",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
