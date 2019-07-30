import express from "express";
let app = express();

const PORT = 3000;
const host = "localhost";
app.get("/", (req, res) => res.send("ok"));
app.listen(PORT, host, () => `Server has started on ${host}/${PORT}`);
