import React from "react";
import styles from "./RecipeCard.module.css";

const RecipeCard = () => {
	return (
		<div className={styles.recipe_card}>
			<div>
				<div className={styles.recipe_img_container}>
					{/* <img src="" > */}
				</div>
				<h3>Chocolate Cake</h3>
			</div>
			<button className="blue-btn">
				See More
			</button>
		</div>
	);
};

export default RecipeCard;
