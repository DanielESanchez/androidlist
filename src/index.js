const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');

require ('./database');
app.use(cors());
app.use(express.json());

//rutas
app.use(require('./routes/home'))
app.use(require('./routes/upload'))
app.use(require('./routes/get-post'))
app.use(require('./routes/search'))
app.use(require('./routes/get-apps'))
app.use(require('./routes/get-themes'))
app.use(require('./routes/get-games'))
app.use(require('./routes/delete-post'))
app.use(require('./routes/adminUser'))
app.use(require('./routes/signin'))


app.listen(process.env.PORT);
console.log('server on port', process.env.PORT);