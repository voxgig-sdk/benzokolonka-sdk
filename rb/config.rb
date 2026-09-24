# Benzokolonka SDK configuration

module BenzokolonkaConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Benzokolonka",
        "slug" => "benzokolonka",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://benzokolonka.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "fuel_price" => {},
        },
      },
      "entity" => {
        "fuel_price" => {
          "fields" => [
            {
              "name" => "address",
              "title" => "Address",
              "type" => "`$STRING`",
              "short" => "Physical address of the station",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "short" => "Unique identifier for the fuel station",
            },
            {
              "name" => "lastUpdated",
              "title" => "Last Updated",
              "type" => "`$STRING`",
              "short" => "Timestamp of last price update",
              "format" => "date-time",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "short" => "Name of the fuel station",
            },
            {
              "name" => "price",
              "title" => "Price",
              "type" => "`$NUMBER`",
              "short" => "Current fuel price",
              "format" => "float",
            },
            {
              "name" => "priceChange",
              "title" => "Price Change",
              "type" => "`$NUMBER`",
              "short" => "Price change over the specified period",
              "format" => "float",
            },
            {
              "name" => "region",
              "title" => "Region",
              "type" => "`$INTEGER`",
              "short" => "Region ID where the station is located",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "fuel_price",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/home",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "home",
                    },
                  ],
                  "parts" => [
                    "api",
                    "home",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "fuel",
                        "orig" => "fuel",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "ai95",
                      },
                      {
                        "name" => "period",
                        "orig" => "period",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 7,
                      },
                      {
                        "name" => "region",
                        "orig" => "region",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 4,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "fuel",
                      "period",
                      "region",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BenzokolonkaFeatures.make_feature(name)
  end
end
