import app from './app'

const PORT = process.env.API_PORT
console.log('Listening in PORT:', PORT)

app.listen({
  port: PORT,
})
