const Recipe = require('../models/recipeModel');

// create getAll ops
const getRecipes = async (req, res) => {
    await Recipe.find({}, (err, recipes) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            });
        }

        if (!recipes.length) {
            return res.status(404).json({
                success: false,
                error: 'Recipes not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: recipes
        });

    }).catch(err => console.log(err));
};

module.exports = getRecipes;