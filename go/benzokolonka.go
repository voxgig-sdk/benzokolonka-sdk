package voxgigbenzokolonkasdk

import (
	"github.com/voxgig-sdk/benzokolonka-sdk/go/core"
	"github.com/voxgig-sdk/benzokolonka-sdk/go/entity"
	"github.com/voxgig-sdk/benzokolonka-sdk/go/feature"
	_ "github.com/voxgig-sdk/benzokolonka-sdk/go/utility"
)

// Type aliases preserve external API.
type BenzokolonkaSDK = core.BenzokolonkaSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BenzokolonkaEntity = core.BenzokolonkaEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BenzokolonkaError = core.BenzokolonkaError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewFuelPriceEntityFunc = func(client *core.BenzokolonkaSDK, entopts map[string]any) core.BenzokolonkaEntity {
		return entity.NewFuelPriceEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBenzokolonkaSDK = core.NewBenzokolonkaSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBenzokolonkaSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BenzokolonkaSDK  { return NewBenzokolonkaSDK(nil) }
func Test() *BenzokolonkaSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
