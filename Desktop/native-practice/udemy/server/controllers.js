const poster = require('../db/helpers.js').poster
const getter = require('../db/helpers.js').getter

const controllers = {
    getCoordinates: (req,res) => {
        getter(req.body,(err,result) => {
            if(err) res.status(404).send(err)
            else res.status(200).send(result)
        })
    },
    addCoordinates: (req,res) => {
        poster(req,(err,result) => {
            if(err) res.status(404).send(err)
            else res.status(200).send(result)
        })
    }
};

module.exports = controllers