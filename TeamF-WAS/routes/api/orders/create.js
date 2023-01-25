'use strict'

module.exports = async function (fastify, opts) {
   
    fastify.post('/', async function (request, reply) {
       
        const db = fastify.mongo.client.db('baedal')
        const result = await db.collection('order').insert(request.body)
    
        reply
        .code(201)
        .header('Content-type', 'application/json')
        .send(result)

}
)}