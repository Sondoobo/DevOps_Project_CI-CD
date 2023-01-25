'use strict'

module.exports = async function (fastify, opts) {
   
    fastify.post('/', async function (request, reply) {
       
        const db = fastify.mongo.client.db('baedal')
        
        const deliveryInfo = ({
            "deliveryInfo": {
                "status": "preparing",
                "assignedCourier": "최배달",
                "estimatedDeleveryTime": 15
        }})
        const result = await db.collection('order').insert(Object.assign(deliveryInfo, (request.body)))

        reply
        .code(201)
        .header('Content-type', 'application/json')
        .send(result)

}
)}