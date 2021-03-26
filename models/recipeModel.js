const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema(
    {
        name: { type: String, required: true },
        calories: { type: Number, required: true},
        protein: Number,
        totFat: Number,
        satFat: Number,
        unsatFat: Number,
        carbs: Number,
        fiber: Number,
        sugar: Number,
        sodium: Number,
        chol: Number,
        potas: Number,
        servings: Number
    }
);

module.exports = mongoose.model('recipes', Recipe);