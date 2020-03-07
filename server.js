const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/post");
const DB_CONNECTION_STRING = require("./config/keys").mongoURI;

const app = express();

// mongodb connection
mongoose
  .connect(DB_CONNECTION_STRING, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDb Connected"))
  .catch(error => console.log(error));

// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);


app.get("/", (req, res) => {
  res.send("Heyya");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening to port ${port}`));
