import './utils/module-alias'
import { Server } from '@overnightjs/core'
import * as bodyParser from 'body-parser'

import { ForecastController } from './controllers/ForecastController'
import { Application } from 'express'

export class SetupServer extends Server {
  constructor(private port = 3333) {
    super()
  }

  public init(): void {
    this.setupExpress()
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json())
    this.setupControllers()
  }

  private setupControllers(): void {
    const forecastController = new ForecastController()

    this.addControllers([forecastController])
  }

  public getApp(): Application {
    return this.app
  }
}
