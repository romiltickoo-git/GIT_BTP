// Importing  Express Package to make application server
const express = require('express')

// Instantiating the express module
const app = express()

// port in which application server runs
const port = process.env.VCAP_APP_PORT || 5000

// Creating API with Route Hello
app.get('/hello', (req, res) => {
console.log("how are you!")
console.log(req.query.user)
res.send("hellooooooooooo"+' '+req.query.user
)
})

app.get('/weather',(req, res) => {
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=8ce34d6fc9e29d253b05f7a5f8ef3006&appid=8ce34d6fc9e29d253b05f7a5f8ef3006',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

} )

app.listen(port, () => {
console.log('Server is running on port 5000')
})
console.log("welcome ZAPYard");

