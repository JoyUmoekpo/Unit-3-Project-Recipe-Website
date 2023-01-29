import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./RecipeCard.module.css";

const RecipeCard = ({recipe}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/recipe/${recipe.recipe_id}`);
	};

	return (
		<div className={styles.card}>
			<div>
				<div>
					<img
						src={`${recipe.image_url}`}
						alt="Snack"
						className={styles.recipe_image}
					/>
				</div>
				<h3 className={styles.recipe_text}>{recipe.recipe_name}</h3>
			</div>
			<button onClick={handleClick}>See More</button>
		</div>
	);
};

export default RecipeCard;
