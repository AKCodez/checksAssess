const coordinates = require('./index.js').coordinates
const db = require('./index.js').db

async function poster({longititude,latitude},cb) {
    try{
          coordinates.insertMany({Cid:13,longitude:2.3212,latitude:0.8228238})
        .then((res) => cb(null,res))
        .catch((err) => cb(err))
    }
    catch(ex) {
        console.log('something went wrong', ex)
    }
    finally {
        console.log('query complete')
    }
}

async function getter({id},cb) {
    try{
         await coordinates.find({}).lean()
        .then((res) => cb(null,res))
        .catch((err) => cb(err))
    }
    catch(ex) {
        console.log('something went wrong', ex)
    }
    finally {
        
        console.log('query complete')
    }
}


module.exports.poster = poster
module.exports.getter = getter