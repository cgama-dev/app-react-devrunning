const app = require('./app')
require('./db')

const port = process.env.PORT || 3005

app.listen(port, () => {
  console.log('Server running...')
})
