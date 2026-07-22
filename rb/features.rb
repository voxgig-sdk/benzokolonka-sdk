# Benzokolonka SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BenzokolonkaFeatures
  def self.make_feature(name)
    case name
    when "base"
      BenzokolonkaBaseFeature.new
    when "test"
      BenzokolonkaTestFeature.new
    else
      BenzokolonkaBaseFeature.new
    end
  end
end
