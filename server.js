const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }))

app.get('/historic-weather/:city/:date/:apiKey', (req, res) => {
    if (req.params.apiKey != "szuperbiztosjelszo") res.status("401").send("Unauthorized");
    res.json({ mintemp: "13", maxtemp: "25" });
})

app.listen(process.env.PORT || 3000, () => console.log('Server started...'));