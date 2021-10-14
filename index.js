import express from 'express'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import YAML from 'yamljs'
import machines from './machines/machinesRoute.js'
import status from './status/statusRoute.js'
import events from './events/eventRoute.js'
// import history from 'connect-history-api-fallback'

const swaggerDocument = YAML.load('./docs/swagger.yaml')

const PORT = process.env.PORT || 4001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/machines', machines)
app.use('/api/status', status)
app.use('/api/events', events)

// app.use(express.static('../client/dist'))
// app.use(history({
//   index: '/index.html'
// }));

app.listen(PORT, () => {
  console.log('Server runs on port ' + PORT)
})
