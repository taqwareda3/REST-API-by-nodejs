import express from "express";
import students from "./routes/students.js";
const app = express();
const PORT = 5000;
app.use(express.json());

app.get("/", (request, response) => {
  response.send("bye");
});
app.use("/students", students);
app.listen(PORT, () => console.log(`server is running in ${PORT}`));
