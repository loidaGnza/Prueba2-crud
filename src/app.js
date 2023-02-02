const express = require('express')
const app = express()

app.use(express.json())

const usersDB = [
    {
	id :1,
	firstName: "Sahid",
    lastName: "Kick",
    email: "sahid.kick@academlo.com",
    password: "root",
    age:  22
},
{
    id :1,
	firstName: "Loida",
    lastName: "Smith",
    email: "smiglj@gmail.com",
    password: "AmRk",
    age:  32
}
];

let baseID = 3;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server ok!'
    })
});

app.get('/users', (req, res) => {
    res.json(usersDB)
});


app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    const data = usersDB.find((item) => id === item.id)

    if (data) {
        res.json(data)

    } else {
        res.status(404).json({
            message: 'Invalid ID'
        })
    }
});

app.post('/users', (req, res) => {
    const data = req.body

    const newUser = {
        id: ++baseID,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }

    usersDB.push(newUser)
    res.status(201).json(newUser)
});

app.listen(9000),() => {
    console.log('Server started at : http://localhost:9000')
}


module.exports = app
