const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/config')
const Pizza = require('./models/PizzaModel')
const Pizzas = require('./data/pizza-data')

//config dot env and mongodb conn file
dotenv.config()
connectDB()

//import data
const importData = async () =>{
    try{
        await Pizza.deleteMany()
        const sampleData = Pizzas.map(pizza=>{
            return {...pizza}
        })
        await Pizza.insertMany(sampleData)
        console.log('Data Imported');
        process.exit()
    }catch(err){
        console.log('Data not imported');
        process.exit(1)
    }
}



if(process.argv[2]==='-d'){
    dataDestroy()
} else {
    importData()
}