'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (req, reply) {
       
        const db = fastify.mongo.client.db('baedal')
        const query = req.query
        const result = await db.collection('order').find(query).toArray()

        reply
        .code(200)
        .header('Content-type', 'application/json')
        .send(result)
  })
    fastify.get('/:_id', async function (req, reply) {
        const db = fastify.mongo.client.db('baedal')
        const ObjectID = require('mongodb').ObjectID
        const query = req.query
        const result = await db.collection('order').find({_id: new ObjectID(req.params._id)}).toArray()


        reply
       .code(200)
       .header('Content-type', 'application/json')
       .send(result)
    })
}
