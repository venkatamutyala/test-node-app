fetch = require('node-fetch');

const express = require("express");

const app = express();

app.get('/error/:code', function(req, res) {
  const errorCode = req.params.code;
  res.status(errorCode).send({ error: `Error with code ${errorCode}` });
});




app.get('/slow-response', (req, res) => {
  // Get the number of seconds to pause from the query parameters
  const duration = req.query.duration;

  // Pause the execution of the endpoint for the specified number of seconds
  setTimeout(() => {
    // Send the response after the specified number of seconds
    res.send('Slow response');
  }, duration);
});

app.get('/highcpu', (req, res) => {
  let duration = Number(req.query.duration) || 5000 // default to 5000 milliseconds
  let start = Date.now()
  while(Date.now() - start < duration) {
    // generate high CPU load for the specified duration
  }
  res.send(`High CPU load generated for ${duration} milliseconds`)
})


app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps June 21, 2022</h1>" +
      "<h2> DB </h2>" +
	"DB: <b>" + "DB missing" + "</b><br />"
  );
});


app.get('/ip', (request, response) => {
    fetch('https://api.ipify.org/?format=json')
    .then(res => res.text())
    .then(text => response.send(text));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

