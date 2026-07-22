# Benzokolonka SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BenzokolonkaUtility.registrar = ->(u) {
  u.clean = BenzokolonkaUtilities::Clean
  u.done = BenzokolonkaUtilities::Done
  u.make_error = BenzokolonkaUtilities::MakeError
  u.feature_add = BenzokolonkaUtilities::FeatureAdd
  u.feature_hook = BenzokolonkaUtilities::FeatureHook
  u.feature_init = BenzokolonkaUtilities::FeatureInit
  u.fetcher = BenzokolonkaUtilities::Fetcher
  u.make_fetch_def = BenzokolonkaUtilities::MakeFetchDef
  u.make_context = BenzokolonkaUtilities::MakeContext
  u.make_options = BenzokolonkaUtilities::MakeOptions
  u.make_request = BenzokolonkaUtilities::MakeRequest
  u.make_response = BenzokolonkaUtilities::MakeResponse
  u.make_result = BenzokolonkaUtilities::MakeResult
  u.make_point = BenzokolonkaUtilities::MakePoint
  u.make_spec = BenzokolonkaUtilities::MakeSpec
  u.make_url = BenzokolonkaUtilities::MakeUrl
  u.param = BenzokolonkaUtilities::Param
  u.prepare_auth = BenzokolonkaUtilities::PrepareAuth
  u.prepare_body = BenzokolonkaUtilities::PrepareBody
  u.prepare_headers = BenzokolonkaUtilities::PrepareHeaders
  u.prepare_method = BenzokolonkaUtilities::PrepareMethod
  u.prepare_params = BenzokolonkaUtilities::PrepareParams
  u.prepare_path = BenzokolonkaUtilities::PreparePath
  u.prepare_query = BenzokolonkaUtilities::PrepareQuery
  u.result_basic = BenzokolonkaUtilities::ResultBasic
  u.result_body = BenzokolonkaUtilities::ResultBody
  u.result_headers = BenzokolonkaUtilities::ResultHeaders
  u.transform_request = BenzokolonkaUtilities::TransformRequest
  u.transform_response = BenzokolonkaUtilities::TransformResponse
}
