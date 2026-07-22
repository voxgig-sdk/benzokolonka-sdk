-- Benzokolonka SDK error

local BenzokolonkaError = {}
BenzokolonkaError.__index = BenzokolonkaError


function BenzokolonkaError.new(code, msg, ctx)
  local self = setmetatable({}, BenzokolonkaError)
  self.is_sdk_error = true
  self.sdk = "Benzokolonka"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BenzokolonkaError:error()
  return self.msg
end


function BenzokolonkaError:__tostring()
  return self.msg
end


return BenzokolonkaError
