const express = require('express')
const path = require('path')

const app = express()

// server only the static files from the dist directory
app.use(express.static('./dist/angular-test'))

app.get('/*', (req, res) =>
res.sendFile('index.html', {root: 'dist/angular-test/'})
)

app.listen(process.env.PORT || 8080)