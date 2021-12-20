import express from "express";
import timestampHandler from "../index.js";

const app = express();

const PORT = 3005;

app.use(timestampHandler()); // Default: () => new Date().toUTCString()
// app.use(timestampHandler(moment().year));

app.use("/", (_request, response) => {
  response.json({
    foo: "bar",
    framework: "express",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
