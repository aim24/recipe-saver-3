const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  id: Schema.ObjectId,
	user_id: String,
	title: String,
	ingredients: String,
	description: String,
	url: String,
	image: String,
	tags: { type : Array , 'default' : [] },
	favorite: Boolean,
  creationDate: {type: Date, default: Date.now},
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;