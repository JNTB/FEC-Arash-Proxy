const express = require("express");
const morgan = require("morgan");
const path = require("path");
const request = require("request");
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

// app.use(`/pics`, function(req, res) {
//   var url = `http://localhost:1130/pics`;
//   req.pipe(request(url)).pipe(res);
// });

// app.use(`/api/similar`, function(req, res) {
//   var url = `http://localhost:1128/api/similar`;
//   req.pipe(request(url)).pipe(res);
// });

// app.use(`/reviews/:id`, function(req, res) {
//   var url = `http://localhost:2000/reviews/${req.params.id}`;
//   req.pipe(request(url)).pipe(res);
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
