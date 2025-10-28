import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
