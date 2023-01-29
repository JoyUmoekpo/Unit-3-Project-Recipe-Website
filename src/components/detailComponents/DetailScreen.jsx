import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import salmon from "../../assets/salmon.jpg";
import styles from "./DetailScreen.module.css";

import axios from "axios";

const DetailScreen = () => {
	const { id } = useParams();
	const [recipes, setRecipe] = useState({});

	useEffect(() => {
		axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
			setRecipe(res.data);
		});
	}, [id]);

	return (
		<section>
			<div
				className={styles.detail_image}
				style={{
					background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
					backgroundSize: "cover",
				}}>
				<h1>{recipes.recipe_name}</h1>
			</div>
			<div className={styles.details}>
				<div className={styles.ingredients}>
					<h2 className={styles.detail_title}>Recipe</h2>
					<h4>Prep Time: {recipes.prep_time}</h4>
					<h4>Cook Time: {recipes.cook_time}</h4>
					<h4>Serves: {recipes.serves}</h4>
					<br />
					<h2 className={styles.detail_title}>Ingredients</h2>
					{recipes.ingredients &&
						recipes.ingredients.map((ing, index) => {
							return (
								<h4>
									{ing.quantity} {ing.ingredient}
								</h4>
							);
						})}
				</div>
				<div className={styles.instructions}>
					<h2 className={styles.detail_title}>Instructions</h2>
					<p style={{ whiteSpace: "pre-wrap" }}>
						{recipes.instructions && JSON.parse(recipes.instructions)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default DetailScreen;
