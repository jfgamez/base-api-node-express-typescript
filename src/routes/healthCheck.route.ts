import { HealthCheckController } from '../controllers/healthCheck.controler'
import express from 'express'

export class HealthCheckRoute {
  private healCheckController: HealthCheckController

  constructor() {
    this.healCheckController = new HealthCheckController()
  }

  public routes(app: express.Application): void {
    app.route('/healthCheck').get(this.healCheckController.checkHealth)
  }
}
