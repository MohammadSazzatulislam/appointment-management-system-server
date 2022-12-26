const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.4lwt8qz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {

    const BookingAppointment = client.db('appointment-management').collection('booked')

    app.get("/", (req, res) => {
      res.send("Appointment Management Syatem Api is running...");
    });

    






  } finally {
  }
}

run().catch((err) => console.log(err.message));

app.listen(() => console.log(`port is running at : ${port}`));
