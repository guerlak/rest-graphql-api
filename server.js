const { json } = require('express');
const express = require('express');
const routes = require("./routes/index");

const app = express();
const sqlserver = require("./graphql/index");

app.listen(3000, () => {
    console.log('server runmning on 3000')
})

//rest

app.use(json())
app.use(routes);

//graphql
sqlserver.start(app);

