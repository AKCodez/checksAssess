const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fishr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('successfully connected to the database...');
});

const listingSchema = new mongoose.Schema({
  Cid: {type:Number, index:true},
  longitude: Number,
  latitude: Number
});

module.exports.coordinates = mongoose.model('coordinates', listingSchema);
module.exports.db = db