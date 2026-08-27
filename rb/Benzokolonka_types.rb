# frozen_string_literal: true

# Typed models for the Benzokolonka SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# FuelPrice entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] priceChange
#   @return [Float, nil]
#
# @!attribute [rw] region
#   @return [Integer, nil]
FuelPrice = Struct.new(
  :address,
  :id,
  :lastUpdated,
  :name,
  :price,
  :priceChange,
  :region,
  keyword_init: true
)

# Request payload for FuelPrice#list.
#
# @!attribute [rw] fuel
#   @return [String]
#
# @!attribute [rw] period
#   @return [Integer, nil]
#
# @!attribute [rw] region
#   @return [Integer, nil]
FuelPriceListMatch = Struct.new(
  :fuel,
  :period,
  :region,
  keyword_init: true
)

