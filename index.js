require('dotenv').config(); // read from a .enb file located a the root 

const server = require('./api/server.js');

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
