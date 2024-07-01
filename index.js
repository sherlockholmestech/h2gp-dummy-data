const express = require('express')
const app = express()
const port = 8081

app.get('/volatge/battery', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	let send_number = 7 + Math.random();
	res.send(send_number.toString());
})

app.get('/amperage/battery', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	let send_number = 5.7 + Math.random();
	res.send(send_number.toString());
})

app.get('/temperature', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	let send_number = 25 + Math.random()*5;
	res.send(send_number.toString());
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
