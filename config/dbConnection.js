const mongoose = require('mongoose')

const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('database connected', connect.connection.host)
    }catch (err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDb

// God is a specialist in making ordinary people great
// God turn mess into messages
// i need character to handle the instruction of greatness (it's offen hot and tough)
// greatness often comes out of pain taken experience (you will go throught test, and toughness)
// i receive the grace and the stregth and wisdom to go throught every chanllenge  every test and every task in my journy to greatness
// when grace is available, conquest is assured
// Luke 2:40 {how jesus grew}
// Gen 26:12