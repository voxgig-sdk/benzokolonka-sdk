package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewFuelPriceEntityFunc func(client *BenzokolonkaSDK, entopts map[string]any) BenzokolonkaEntity

