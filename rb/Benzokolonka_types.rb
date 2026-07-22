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
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] price_change
#   @return [Float, nil]
#
# @!attribute [rw] region
#   @return [Integer, nil]
FuelPrice = Struct.new(
  :address,
  :id,
  :last_updated,
  :name,
  :price,
  :price_change,
  :region,
  keyword_init: true
)

# Request payload for FuelPrice#list.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] price_change
#   @return [Float, nil]
#
# @!attribute [rw] region
#   @return [Integer, nil]
FuelPriceListMatch = Struct.new(
  :address,
  :id,
  :last_updated,
  :name,
  :price,
  :price_change,
  :region,
  keyword_init: true
)

