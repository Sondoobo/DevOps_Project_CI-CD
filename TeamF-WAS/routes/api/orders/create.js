'use strict'

module.exports = async function (fastify, opts) {
   
    fastify.post('/', async function (request, reply) {
       
        const db = fastify.mongo.client.db('baedal')
        
        const deliveryInfo = ({
            "deliveryInfo": {
                "status": "preparing",
                "assignedCourier": "최배달",
                "estimatedDeleveryTime": 15
        },
            "consumer_id": "63d665e518ec1ba34ef39b82",
            "restaurant": {
                "name": "동훈 커피",
                "address": "알 거 없잖아?^^"
            }
    })
        //const ObjectID = require('mongodb').ObjectID
        //const restaurants = await db.collection('restaurants').find({_id: new ObjectID(request.params._id)}).toArray()
        //var obj = JSON.parse(restaurants)
        //const restaurantsobj = Object.assign(obj.name, obj.address)
        const result = await db.collection('order').insert(Object.assign(deliveryInfo, (request.body)))

        reply
        .code(201)
        .header('Content-type', 'application/json')
        .send(result)

}
)}