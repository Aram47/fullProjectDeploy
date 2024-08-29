const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const {client}      = require('./core/db');
const Products      = require('./controllers/Products');
const app           = express();
const PORT          = process.env.PORT || 3003;

client.connect();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', Products);
app.use('/delete', Products);

app.get("/", async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server listen on PORT: ${PORT}`);
});
