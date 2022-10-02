import express from 'express'
import { environment } from './environment.js'

const app = express()

app.use(express.json())

app.listen(environment.PORT, () => {
  console.log(
    `==== App Has Started on port ${environment.PORT} in ${environment.NODE_ENV} ====`,
  )
})

app.get('/todo', (req, res) => {
  res.json({ value: 'Todos buddy' })
})
