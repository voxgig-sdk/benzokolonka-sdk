

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BenzokolonkaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('FuelPriceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BENZOKOLONKA_TEST_LIVE=TRUE.
  afterEach(liveDelay('BENZOKOLONKA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BenzokolonkaSDK.test()
    const ent = testsdk.FuelPrice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BENZOKOLONKA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'fuel_price.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"address","req":false,"short":"Physical address of the station","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique identifier for the fuel station","type":"`$INTEGER`","index$":1},{"active":true,"format":"date-time","name":"lastUpdated","req":false,"short":"Timestamp of last price update","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Name of the fuel station","type":"`$STRING`","index$":3},{"active":true,"format":"float","name":"price","req":false,"short":"Current fuel price","type":"`$NUMBER`","index$":4},{"active":true,"format":"float","name":"priceChange","req":false,"short":"Price change over the specified period","type":"`$NUMBER`","index$":5},{"active":true,"name":"region","req":false,"short":"Region ID where the station is located","type":"`$INTEGER`","index$":6}],"id":{"field":"id","name":"id"},"name":"fuel_price","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"ai95","kind":"query","name":"fuel","orig":"fuel","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":7,"kind":"query","name":"period","orig":"period","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":4,"kind":"query","name":"region","orig":"region","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/home","json":"{\"operationId\":\"getStationsList\",\"parameters\":[{\"description\":\"Type of fuel to query. Examples include 'gas', 'ai95', 'ai92', 'ai98', 'dt' (diesel).\",\"in\":\"query\",\"name\":\"fuel\",\"required\":true,\"schema\":{\"enum\":[\"gas\",\"ai95\",\"ai92\",\"ai98\",\"dt\"],\"example\":\"ai95\",\"type\":\"string\"}},{\"description\":\"Time period in days for which to retrieve price statistics.\",\"in\":\"query\",\"name\":\"period\",\"required\":false,\"schema\":{\"default\":7,\"example\":7,\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Region ID in Russia for which to retrieve fuel station data.\",\"in\":\"query\",\"name\":\"region\",\"required\":false,\"schema\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"stations\":{\"description\":\"List of fuel stations with pricing information\",\"items\":{\"properties\":{\"address\":{\"description\":\"Physical address of the station\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the fuel station\",\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Timestamp of last price update\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the fuel station\",\"type\":\"string\"},\"price\":{\"description\":\"Current fuel price\",\"format\":\"float\",\"type\":\"number\"},\"priceChange\":{\"description\":\"Price change over the specified period\",\"format\":\"float\",\"type\":\"number\"},\"region\":{\"description\":\"Region ID where the station is located\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"statistics\":{\"description\":\"Aggregated price statistics for the region\",\"properties\":{\"averagePrice\":{\"description\":\"Average fuel price in the region\",\"format\":\"float\",\"type\":\"number\"},\"maxPrice\":{\"description\":\"Maximum fuel price found\",\"format\":\"float\",\"type\":\"number\"},\"minPrice\":{\"description\":\"Minimum fuel price found\",\"format\":\"float\",\"type\":\"number\"},\"priceChangeTrend\":{\"description\":\"Overall price trend (increasing, decreasing, stable)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response containing fuel station list with price statistics\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the issue\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid parameters provided\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the server issue\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/home","segments":[{"lit":"api"},{"lit":"home"}],"select":{"exist":["fuel","period","region"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"fuel_price","name__orig":"fuel_price","Name":"FuelPrice","name_":"fuel_price","name-":"fuel-price","NAME":"FUEL_PRICE","index$":0}, {"active":true,"entity":"fuel_price","key$":"BasicFuelPriceFlow","kind":"basic","name":"BasicFuelPriceFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"fuel_price_ref01"}}],"index$":0}]}, 'FuelPrice')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let fuel_price_ref01_data = Object.values(setup.data.existing.fuel_price)[0] as any

    // LIST
    const fuel_price_ref01_ent = client.FuelPrice()
    const fuel_price_ref01_match: any = {}

    const fuel_price_ref01_list = (await fuel_price_ref01_ent.list(fuel_price_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/fuel_price/FuelPriceTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BenzokolonkaSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['fuel_price01','fuel_price02','fuel_price03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BENZOKOLONKA_TEST_FUEL_PRICE_ENTID': idmap,
    'BENZOKOLONKA_TEST_LIVE': 'FALSE',
    'BENZOKOLONKA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BENZOKOLONKA_TEST_FUEL_PRICE_ENTID']

  const live = 'TRUE' === env.BENZOKOLONKA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BENZOKOLONKA_TEST_FUEL_PRICE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BenzokolonkaSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BENZOKOLONKA_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
