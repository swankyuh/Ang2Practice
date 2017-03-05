const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
