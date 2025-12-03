const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Your private code (not sent to users)
const hiddenScript = `
print("This is a private script on the server.")
-- your real code here
`;

app.get("/", (req, res) => {
    // The raw link only shows this
    res.send("Protected by K13");
});

// Hidden script endpoint (only for your own tools, not exploits)
app.get("/internal-script", (req, res) => {
    res.json({ status: "ok" });
    // You can customize this however you want for legit purposes
});

app.listen(PORT, () => {
    console.log("K13 Protection Service Running");
});
