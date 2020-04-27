let express = require('express')
let app = express()

let data = require('./file.json')


app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`Couldnt find the employee`)
    }

    res.send(data)
})

app.get('/employees/:id', (req, res) => {

    const sData = data.employees.find((employee) => {

        return parseInt(req.params.id) === employee.employeeID
    })

    if (!sData) res.status(404).send(`Couldnt find the employee id`)
    
    res.send(sData)

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})