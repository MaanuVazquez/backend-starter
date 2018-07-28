import polka from 'polka'
import morgan from 'morgan'
import routes from './routes'

const { PORT = 3000 } = process.env

polka()
  .use(morgan('tiny'))
  .use('', routes)
  .listen(PORT)
  .then(() => {
    console.info(`> Running on localhost:${PORT}`)
  })
