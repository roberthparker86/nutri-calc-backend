const Recipe = require('../models/recipeModel');

// create CRUD ops
const createRecipe = (req, res) => {
    const body = req.body;

    // err if no input
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe'
        });
    }

    // create new recipe item
    const recipe = new Recipe(body);

    // handle recipe creation err
    if (!recipe) {
        return res.status(400).json({
            success: false,
            error: err
        });
    }

    // save recipe to db and message result
    recipe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: recipe._id,
                message: 'Recipe created!'
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Recipe not created!'
            });
        });
};

module.exports = createRecipe;