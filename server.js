const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.redirect('/')
})
app.get('/butts', (req, res) => {
  let data = { item: 'dog', sound: 'boof' }
  res.json(data)
})
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
