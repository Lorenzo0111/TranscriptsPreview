const app = require("express")();
const cors = require("cors");
const axios = require("axios").default;

require("dotenv").config();

app.use(cors());

app.get("/", (req,res) => {
    const query = Object.keys(req.query);

    if (query.length < 1 || !query[0].startsWith("https://cdn.discordapp.com/attachments/")) {
        res.status(400).send("Invalid URL");
        return;
    }

    axios.get(query[0]).then(response => {
        res.send(response.data);
    }).catch(error => {
        res.status(500).send("Invalid file");
    });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server started");
    console.log("Listening on http://localhost:" + PORT);
});