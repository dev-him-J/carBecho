const express = require("express");
const app = express();
const route = require("./routes/router");
const dotenv = require("dotenv");
// const connectDB = require("./config/db");

const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const port = process.env.PORT || 5000;
// const uri = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// const dbName = "carKhareedo";
// const collectionName = "user";


// async function run() {
//   try {

//     await client.db("carKhareedo").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

app.use("/", route);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
