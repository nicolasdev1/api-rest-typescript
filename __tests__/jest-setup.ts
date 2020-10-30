import { SetupServer } from '@src/server'
import * as supertest from 'supertest'

beforeAll(() => {
  const server = new SetupServer()
  server.init()

  global.testRequest = supertest(server.getApp())
})
