

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"address":{"a":true,"h":"Address","n":"address","r":false,"sh":"Physical address of the station","t":"`$STRING`","key$":"address","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the fuel station","t":"`$INTEGER`","key$":"id","index$":1},"lastUpdated":{"a":true,"fo":"date-time","h":"Last Updated","n":"lastUpdated","r":false,"sh":"Timestamp of last price update","t":"`$STRING`","key$":"lastUpdated","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the fuel station","t":"`$STRING`","key$":"name","index$":3},"price":{"a":true,"fo":"float","h":"Price","n":"price","r":false,"sh":"Current fuel price","t":"`$NUMBER`","key$":"price","index$":4},"priceChange":{"a":true,"fo":"float","h":"Price Change","n":"priceChange","r":false,"sh":"Price change over the specified period","t":"`$NUMBER`","key$":"priceChange","index$":5},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"Region ID where the station is located","t":"`$INTEGER`","key$":"region","index$":6}},"id":{"field":"id","name":"id"},"name":"fuel_price","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/home","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"ai95","k":"query","n":"fuel","or":"fuel","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":7,"k":"query","n":"period","or":"period","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":4,"k":"query","n":"region","or":"region","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api/home","q":{"exist":["fuel","period","region"]},"r":{},"s":[{"lit":"api"},{"lit":"home"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"fuel_price","name__orig":"fuel_price","Name":"FuelPrice","name_":"fuel_price","name-":"fuel-price","NAME":"FUEL_PRICE","index$":0}, {"active":true,"entity":"fuel_price","key$":"BasicFuelPriceFlow","kind":"basic","name":"BasicFuelPriceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"fuel_price_ref01"}}],"index$":0}]}, 'FuelPrice', {"GET /api/home":{"protocol":"http","operationId":"getStationsList","responses":{"200":{"description":"Successful response containing fuel station list with price statistics","content":{"application/json":{"schema":{"type":"object","properties":{"stations":{"description":"List of fuel stations with pricing information","items":{"properties":{"address":{"description":"Physical address of the station","type":"string","key$":"address"},"id":{"description":"Unique identifier for the fuel station","type":"integer","key$":"id"},"lastUpdated":{"description":"Timestamp of last price update","format":"date-time","type":"string","key$":"lastUpdated"},"name":{"description":"Name of the fuel station","type":"string","key$":"name"},"price":{"description":"Current fuel price","format":"float","type":"number","key$":"price"},"priceChange":{"description":"Price change over the specified period","format":"float","type":"number","key$":"priceChange"},"region":{"description":"Region ID where the station is located","type":"integer","key$":"region"}},"type":"object","index$":0},"key$":"stations","type":"array"},"statistics":{"description":"Aggregated price statistics for the region","key$":"statistics","properties":{"averagePrice":{"description":"Average fuel price in the region","format":"float","type":"number"},"maxPrice":{"description":"Maximum fuel price found","format":"float","type":"number"},"minPrice":{"description":"Minimum fuel price found","format":"float","type":"number"},"priceChangeTrend":{"description":"Overall price trend (increasing, decreasing, stable)","type":"string"}},"type":"object"}}}}}},"400":{"description":"Bad Request - Invalid parameters provided","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing the issue"}}}}}},"500":{"description":"Internal Server Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing the server issue"}}}}}}},"parameters":[{"name":"fuel","in":"query","description":"Type of fuel to query. Examples include 'gas', 'ai95', 'ai92', 'ai98', 'dt' (diesel).","required":true,"schema":{"type":"string","enum":["gas","ai95","ai92","ai98","dt"],"example":"ai95"},"index$":0},{"name":"period","in":"query","description":"Time period in days for which to retrieve price statistics.","required":false,"schema":{"type":"integer","format":"int32","default":7,"example":7},"index$":1},{"name":"region","in":"query","description":"Region ID in Russia for which to retrieve fuel station data.","required":false,"schema":{"type":"integer","format":"int32","example":4},"index$":2}],"securitySource":"unspecified"}})
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
  
