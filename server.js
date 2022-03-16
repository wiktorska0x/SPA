//importowanie modułu express i utowrzenie apliakcji express
const express = require("express");
const path = require("path");

//obiekt zawiera routing, konfiguracje...
const app = express();
//obsługa plików statycznych frameworku express
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));

}); 



app.listen(process.env.PORT || 3000, () => console.log("Server running.."));


