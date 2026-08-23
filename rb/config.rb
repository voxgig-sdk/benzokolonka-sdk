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
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "short" => "Physical address of the station",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the fuel station",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "lastUpdated",
              "short" => "Timestamp of last price update",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the fuel station",
              "type" => "`$STRING`",
            },
            {
              "name" => "price",
              "short" => "Current fuel price",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "priceChange",
              "short" => "Price change over the specified period",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "region",
              "short" => "Region ID where the station is located",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "fuel_price",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "ai95",
                        "kind" => "query",
                        "name" => "fuel",
                        "orig" => "fuel",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 7,
                        "kind" => "query",
                        "name" => "period",
                        "orig" => "period",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 4,
                        "kind" => "query",
                        "name" => "region",
                        "orig" => "region",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/home",
                  "parts" => [
                    "api",
                    "home",
                  ],
                  "select" => {
                    "exist" => [
                      "fuel",
                      "period",
                      "region",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
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
