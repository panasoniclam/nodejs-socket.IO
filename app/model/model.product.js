const mongo = require('mongoose')
const Schema = mongo.Schema;


const productScheam = Schema({
    title:Schema.Types.String,
    contend:String
})

const product = mongo.model('pruduct',productScheam)
module.exports = product