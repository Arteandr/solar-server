const app = require("express")();

app.get("/", (req, res) => {
  return res.json({
    test: "test",
  });
});

app.listen(3000, () => {
  console.log("server started");
});
