-- Typed models for the Benzokolonka SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class FuelPrice
---@field address? string
---@field id? number
---@field last_updated? string
---@field name? string
---@field price? number
---@field price_change? number
---@field region? number

---@class FuelPriceListMatch
---@field address? string
---@field id? number
---@field last_updated? string
---@field name? string
---@field price? number
---@field price_change? number
---@field region? number

local M = {}

return M
