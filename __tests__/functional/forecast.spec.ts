describe('beach forecast functional tests', () => {
  it('it should return a forecast with just a few times', async () => {
    const { status, body } = await global.testRequest.get('/forecast')

    expect(status).toBe(200)
    expect(body).toEqual([{ message: 'Hello World' }])
  })
})
