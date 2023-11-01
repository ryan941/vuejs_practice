import { createRequire } from 'module'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url)
const express = require('express')
const serveStatic = require('serve-static')


//initialise the express package
const app = express()

//use the serve-static package to serve the bundled app files in the dist directory
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

//heroku automatically assigns port so leave it to do it's
//work, don't set a port in the heroku dashboard. while the
//5000 or whatever number you set will be for your local
//machine.
const port = process.env.PORT || 80
app.listen(port)
console.log(`app is listening on port: ${port}`)