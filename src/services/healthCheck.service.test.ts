import { HealthCheckService } from './healthCheck.service'

describe('HealCheckTest', () => {
  it('should return a status', async () => {
    const healthCheckService = new HealthCheckService()
    const checkHealthSpy = jest.spyOn(healthCheckService, 'healthValidate')
    expect(checkHealthSpy).toBeCalled()
    expect(checkHealthSpy).toHaveBeenCalledTimes(1)
  })
})
