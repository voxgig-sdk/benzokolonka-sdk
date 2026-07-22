<?php
declare(strict_types=1);

// Benzokolonka SDK configuration

class BenzokolonkaConfig
{
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
              'active' => true,
              'name' => 'address',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'last_updated',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'price',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'price_change',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'region',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
          ],
          'name' => 'fuel_price',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'ai95',
                        'kind' => 'query',
                        'name' => 'fuel',
                        'orig' => 'fuel',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 7,
                        'kind' => 'query',
                        'name' => 'period',
                        'orig' => 'period',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 4,
                        'kind' => 'query',
                        'name' => 'region',
                        'orig' => 'region',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
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
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
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
