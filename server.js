const app = require("./app");

app.set("port", process.env.PORT);

app.listen(app.get("port"), function () {
  console.log("listening");
});
