-- Benzokolonka SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Benzokolonka",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "lastUpdated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "price",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "priceChange",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "region",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "fuel_price",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "ai95",
                      ["kind"] = "query",
                      ["name"] = "fuel",
                      ["orig"] = "fuel",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 7,
                      ["kind"] = "query",
                      ["name"] = "period",
                      ["orig"] = "period",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 4,
                      ["kind"] = "query",
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/home",
                ["parts"] = {
                  "api",
                  "home",
                },
                ["select"] = {
                  ["exist"] = {
                    "fuel",
                    "period",
                    "region",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
