
import { Context } from './Context'


class BenzokolonkaError extends Error {

  isBenzokolonkaError = true

  sdk = 'Benzokolonka'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BenzokolonkaError
}

