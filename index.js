fetch = require('node-fetch');

const express = require("express");

const app = express();






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

