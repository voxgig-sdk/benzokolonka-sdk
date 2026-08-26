package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Benzokolonka",
			"slug": "benzokolonka",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://benzokolonka.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"fuel_price": map[string]any{},
			},
		},
		"entity": map[string]any{
			"fuel_price": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"short": "Physical address of the station",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the fuel station",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastUpdated",
						"short": "Timestamp of last price update",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the fuel station",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price",
						"short": "Current fuel price",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "priceChange",
						"short": "Price change over the specified period",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "region",
						"short": "Region ID where the station is located",
						"type": "`$INTEGER`",
					},
				},
				"name": "fuel_price",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "ai95",
											"kind": "query",
											"name": "fuel",
											"orig": "fuel",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 7,
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 4,
											"kind": "query",
											"name": "region",
											"orig": "region",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/home",
								"parts": []any{
									"api",
									"home",
								},
								"select": map[string]any{
									"exist": []any{
										"fuel",
										"period",
										"region",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
