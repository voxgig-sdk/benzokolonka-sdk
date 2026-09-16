# Benzokolonka SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BenzokolonkaFeatures
  def self.make_feature(name)
    case name
    when "base"
      BenzokolonkaBaseFeature.new
    when "ratelimit"
      BenzokolonkaRatelimitFeature.new
    when "retry"
      BenzokolonkaRetryFeature.new
    when "test"
      BenzokolonkaTestFeature.new
    when "timeout"
      BenzokolonkaTimeoutFeature.new
    else
      BenzokolonkaBaseFeature.new
    end
  end
end
