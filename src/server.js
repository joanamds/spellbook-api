require('dotenv').config();
const app = require('./app');

const port = process.env.API_PORT || 3001;

app.listen(port, () => console.log('ouvindo magicamente na porta 🪄', port));