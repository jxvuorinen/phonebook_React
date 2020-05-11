
'use strict'

const express = require('express')
const app = express()
require('dotenv').config()
const Contact = require('./models/contact')

const cors = require('cors')

const morgan = require('morgan')

app.use(cors())

app.use(express.json())

app.use(morgan('tiny'))

app.use(express.static('build'))

app.get('/info', (req, res) => {
  const date = new Date()
  Contact.find({}).then(contacts => {
    const length = contacts.length
    res.send(`<p>Phonebook has info for ${length} people<p>
        <p>${date}<p>`)
  })
})

app.get('/api/persons', (req, res) => {
  Contact.find({})
    .then(persons => {
      res.json(persons.map(person => person.toJSON()))
    })
})

app.get('/api/persons/:id', (req, res, next) => {
  Contact.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    // eslint-disable-next-line no-unused-vars
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body
  console.log(body)

  const newPerson = new Contact({
    name: body.name,
    number: body.number,
  })
  newPerson.save()
    .then(savedContact => {
      res.json(savedContact.toJSON())
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const contact = {
    name: body.name,
    number: body.number,
  }
  Contact.findByIdAndUpdate(req.params.id, contact,
    { new: true, runValidators: true, context: 'query' })
    .then(updatedContact => {
      res.json(updatedContact.toJSON())
    })
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error.name === 'TypeError') {
    return res.status(404).json({ error: 'information was already removed from the server' })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})