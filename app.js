const express = require('express')
const cors = require('cors');
const PORT = 3003
const fs = require('fs');
const https = require('https');
const indexRouter = require('./routes/');

const app = express()
// 위와 같이 express와 app을 변수로 사용한다.

let corsOptions = {
    origin: '*',
    credentials: true
}

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

let server;

try {
  https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'dahyeon.key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'dahyeon.cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT);
    console.log('정상 실행')
} catch (error) {
  console.log(error)
}

module.exports = server;