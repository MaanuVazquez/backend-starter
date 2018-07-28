import polka from 'polka'

const router = polka().get('/', (req, res) => {
  res.end('Hello World!')
})

export default router
