# Benzokolonka SDK utility: make_context
require_relative '../core/context'
module BenzokolonkaUtilities
  MakeContext = ->(ctxmap, basectx) {
    BenzokolonkaContext.new(ctxmap, basectx)
  }
end
