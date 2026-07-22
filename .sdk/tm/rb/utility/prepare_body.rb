# Benzokolonka SDK utility: prepare_body
module BenzokolonkaUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
