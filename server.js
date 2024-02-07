const app = require("./app");
require("dotenv").config();
const connectDB = require("./db")

const port = process.env.PORT||5050;

app.listen(port,async()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
    await connectDB();
})