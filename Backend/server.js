let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let Usermodel = require("./models/schema");

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/userData_new");
    console.log("✅ Connected to MongoDB Atlas with other projects added now");
  } catch (error) {
    console.log("❌ Cannot connect to MongoDB Atlas", error);
  }
}

// Run the connection
main();

app.get("/users/data", (req, res) => {
  Usermodel.find()
    .then((d) => {
      res.json(d);
    })
    .catch((error) => console.log(error));

  console.log("working");
});
// pending work
app.post("/user/add", async (req, res) => {
  try {
    let { msg, Rating } = req.body;
    console.log(req.body);
    let result = await Usermodel.create({ msg, Rating });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "faild to stored in db" });
    console.log(error);
  }
});

// delete feedback
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;

  Usermodel.findByIdAndDelete(id)
    .then((d) => {
      res.json(d);
      console.log(d);
      
    })
    .catch((error) => res.status(404).json("not found deleted obj"));
});

app.listen(5000, () => {
  console.log("listing on 5000 port");
});
