const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	let send_number = 7 + Math.random();
	res.send(send_number.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
