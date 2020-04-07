'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());

app.use(express.json());

app.use(morgan('tiny'));

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
];

app.get('/info', (req, res) => {
    const length = persons.length;
    const date = new Date();
    res.send(`<p>Phonebook has info for ${length} people<p>
                <p>${date}<p>`);
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);
    res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const body = req.body;
    console.log(body);
    

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'content missing'
        });

    } else if (persons.find(p => p.name === body.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        });
    }

    const newPerson = {
        name: body.name,
        number: body.number,
        id: generateID()
    }
    persons = persons.concat(newPerson);

    res.json(newPerson);
});

const generateID = () => {
    const minId = persons.length + 1
    const newId = Math.floor(Math.random() * (500 - minId)) + minId;
    return newId;
}

const PORT = process.env.PORT || 3001;
console.log(morgan('tiny'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});