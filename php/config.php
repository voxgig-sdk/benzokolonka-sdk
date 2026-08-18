<?php
declare(strict_types=1);

// Benzokolonka SDK configuration

class BenzokolonkaConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Benzokolonka",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://benzokolonka.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "fuel_price" => [],
                ],
            ],
            "entity" => [
        'fuel_price' => [
          'fields' => [
            [
              'name' => 'address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'lastUpdated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'price',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'priceChange',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'region',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'fuel_price',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'ai95',
                        'kind' => 'query',
                        'name' => 'fuel',
                        'orig' => 'fuel',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 7,
                        'kind' => 'query',
                        'name' => 'period',
                        'orig' => 'period',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 4,
                        'kind' => 'query',
                        'name' => 'region',
                        'orig' => 'region',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/home',
                  'parts' => [
                    'api',
                    'home',
                  ],
                  'select' => [
                    'exist' => [
                      'fuel',
                      'period',
                      'region',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BenzokolonkaFeatures::make_feature($name);
    }
}
