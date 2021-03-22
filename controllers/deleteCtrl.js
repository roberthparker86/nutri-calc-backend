const Recipe = require('../models/recipeModel');

// create delete ops
const deleteRecipe = async (req, res) => {
    await Recipe.findOneAndDelete({_id: req.params.id}, (err, recipe) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            });
        }

        if (!recipe) {
            return res.status(404).json({
                success: false,
                error: 'Recipe not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: recipe
        });

    }).catch(err => console.log(err));
};

module.exports = deleteRecipe;