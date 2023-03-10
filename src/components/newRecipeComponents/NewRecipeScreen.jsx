import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

import styles from "./NewRecipeScreen.module.css";

const NewRecipeScreen = () => {
	const [ingredients, setIngredients] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");

	const initialValues = {
		type: "",
		recipeName: "",
		imageURL: "",
		prepTime: "",
		cookTime: "",
		serves: "",
		ingredients: [],
		instructions: "",
	};

	const onSubmit = (values) => {
		values.ingredients = ingredients;
		console.log(values);

		axios
			.post(`https://recipes.devmountain.com/recipes`, values)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const addIngredient = () => {
		setIngredients([...ingredients, { name, quantity }]);
		setName("");
		setQuantity("");
	};

	const ingredientDisplay = ingredients.map((ing) => {
		return (
			<li>
				{ing.quantity} {ing.name}
			</li>
		);
	});

	return (
		<section>
			<h1 className={styles.form_title}>Tell us about your Recipe!</h1>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<div className={styles.input}>
							<input
								placeholder="Name"
								value={values.recipeName}
								onChange={handleChange}
								name="recipeName"
							/>
							<input
								placeholder="Image URL"
								value={values.imageURL}
								onChange={handleChange}
								name="imageURL"
							/>
						</div>
						<div className={styles.radio}>
							<span>
								<input
									type="radio"
									value="Cook"
									onChange={handleChange}
									name="type"
								/>
								<h5>Cook</h5>
							</span>
							<span>
								<input
									type="radio"
									value="Bake"
									onChange={handleChange}
									name="type"
								/>
								<h5>Bake</h5>
							</span>
							<span>
								<input
									type="radio"
									value="Drink"
									onChange={handleChange}
									name="type"
								/>
								<h5>Drink</h5>
							</span>
						</div>
						<div className={styles.input}>
							<input
								placeholder="Prep Time"
								value={values.prepTime}
								onChange={handleChange}
								name="prepTime"
							/>
							<input
								placeholder="Cook Time"
								value={values.cookTime}
								onChange={handleChange}
								name="cookTime"
							/>
							<input
								placeholder="Serves"
								value={values.serves}
								onChange={handleChange}
								name="serves"
							/>
						</div>
						<div className={styles.input}>
							<div className={styles.ingredient_input}>
								<input
									placeholder="Ingredient"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									placeholder="Quantity"
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}
								/>
							</div>
							<ul>{ingredientDisplay}</ul>
						</div>
						<button
							type="button"
							className={`${styles.form_button} ${styles.another_button}`}
							onClick={addIngredient}>
							Add Another
						</button>
						<textarea
							placeholder="What are the instructions?"
							rows={5}
							value={values.instructions}
							onChange={handleChange}
							name="instructions"
						/>
						<button type="submit" className={`${styles.form_button}`}>
							Save
						</button>
					</form>
				)}
			</Formik>
		</section>
	);
};

export default NewRecipeScreen;
