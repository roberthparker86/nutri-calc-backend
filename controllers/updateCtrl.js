const Recipe = require('../models/recipeModel');

const updateRecipe = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
                success: false,
                error: 'You must provide a body to update'
            });
    }

    Recipe.findOne({_id: req.params.id}, (err, recipe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Recipe not found!'
            });
        }

        recipe.name = body.name;
        recipe.calories = body.calories;
        recipe.protein = body.protein;
        recipe.totFat = body.totFat;
        recipe.satFat = body.satFat;
        recipe.unsatFat = body.unsatFat;
        recipe.carbs = body.carbs;
        recipe.fiber = body.fibers;
        recipe.sugar = body.sugar;
        recipe.sodium = body.sodium;
        recipe.chol = body.chol;
        recipe.potas = body.potas;

        recipe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: recipe._id,
                    message: 'Recipe updated'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Recipe not updated'
                });
            });
    });
}

module.exports = updateRecipe;