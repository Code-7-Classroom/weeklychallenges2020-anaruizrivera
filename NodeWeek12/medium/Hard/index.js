const Joi = require('joi');
const express = require('express');
const app = express();
const dataUser = require('./public/employees.json');

app.use(express.json());
//POST 
app.post('/employees', (req, res) => {

  const employee = {
    id: dataUser.employees.length + 1,
    name: req.body.name
  };
  dataUser.employees.push(employee);
  res.send(employee);
});


//GET 
app.get('/employees', (req, res) => {
  if (!dataUser) {
    res.status(404).send(`Couldnt find the employees`);
  }
  res.send(dataUser);
});


app.get('/employees/:id', (req, res) => {
  const employeeData = dataUser.employees.find((employee) => {
    return parseInt(req.params.id) === employee.id
  });
  if (!employeeData) {
    res.status(404).send(`Couldn't find the employee id`)
  }
  res.send(employeeData);
});

//PUT 
app.put('/employees/:id', (req, res) => {
  const employee = dataUser.employees.find(c => c.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('The employee  with the given ID was not found.');

  //validation
  const schema = {
    name: Joi.string().required()
  };

  const result = Joi.validate(req.body, schema);
  employee.name = req.body.name;
  res.send(employee);
});


//DELET METHOD
app.delete('/employees/:id', (req, res) => {
  //Look up the course
  const employee = dataUser.employees.find(c => c.id === parseInt(req.params.id));
  // return 404
  if (!employee) return res.status(404).send('The employee with the given ID was not found.');

  //Delete part
  const index = dataUser.employees.indexOf(employee);
  dataUser.employees.splice(index, 1);


  //updating
  res.send(employee);
});


//LISENT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 