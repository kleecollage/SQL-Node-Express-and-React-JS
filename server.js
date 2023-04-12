const express = require('express'),
      dbOperation = require('./dbFiles/dbOperations'),
      Employee = require('./dbFiles/employee') ,
      cors    = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

//defining some variables 4 MongoDB

let client;
let session;
app.use(express.json()) ;
app.use(express.urlencoded()) ;
app.use(cors()) ;

app.post('/api', async(req, res) => {
  console.log('called');
  const result = await dbOperation.getEmployees(req.body.name);
  res.send(result.recordset);
});

app.post('/quit', async(req, res) => {
  await dbOperation.createEmployee(req.body);
  const result = await dbOperation.getEmployees(req.body.Firstname);
  console.log("Called quit");
  res.send(result.recordset);
});

let Robert = new Employee(2487, 'Robert', 'Smith', 32, 'M') ;

// console.log(Robert);
dbOperation.getEmployees().then((res) => {
  console.log(res.recordset);
});




app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
