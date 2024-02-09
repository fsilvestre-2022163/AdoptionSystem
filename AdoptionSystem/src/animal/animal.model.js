import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    race:{  //Raza
        type: String,
        required: true
    },
    
    age:{
        type: String,
        maxLength: 3,
        required: true
    },

    size:{
        type: String,
        required: true
    },

    keeper:{
        type: String,
        required: true
    }
})

export default mongoose.model('animal',animalSchema)