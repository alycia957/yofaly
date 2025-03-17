const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true 

    },

    ingredients: { 
        type: [String], 
        required: true
    },
    steps: { 
        type: [String], 
        required: true
    },
    image: { 
        type: [String], 
        required: false
    },
    origin: { 
        type: String, enum: ['Algérie', 'Tunisie', 'Maroc'],
         required: true 
        }
}, 
{ timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
