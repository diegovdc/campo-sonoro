require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const token = process.env.FREESOUND_API_TOKEN;
var cors = require("cors");
app.use(cors());

app.get("/data", (req, res) => {
  const { query, page } = req.query;
  console.log("query: ", query, "page: ", page);
  axios
    .get(
      `https://freesound.org/apiv2/search/text?token=${token}&query=field+recordings+${query.replace(
        " ",
        "+"
      )}&page=${page}&fields=username,tags,previews,url`
    )
    .then((r) => r.data)
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json("Hubo un error");
    });
});

app.get("*", (req, res) => res.send(":P"));

app.listen(port, () =>
  console.log(`"Campo Sonoro" API listening on port ${port}!`)
);
