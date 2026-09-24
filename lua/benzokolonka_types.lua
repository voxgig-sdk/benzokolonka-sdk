-- Typed models for the Benzokolonka SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class FuelPrice
---@field address? string
---@field id? number
---@field lastUpdated? string
---@field name? string
---@field price? number
---@field priceChange? number
---@field region? number

---@class FuelPriceListMatch
---@field fuel string
---@field period? number
---@field region? number

local M = {}

return M
