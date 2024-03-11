
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fitness-project',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const con = mongoose.connection

con.on('error', console.error.bind(console, 'MongoDB connection error:'));
con.once('open', () => {
    console.log('Connected to MongoDB');
 
});




module.exports = con;
