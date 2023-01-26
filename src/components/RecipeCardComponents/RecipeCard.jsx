import React from "react";
import styles from "./RecipeCard.module.css";

const RecipeCard = () => {
	return (
		<div className={styles.card}>
			<div>
				<div>
					<img src="https://64.media.tumblr.com/01af5ca3719a6ecd8b51e804a1326c52/d8b1ed1c44da1425-a1/s400x600/53a367f515790543e80f219bdc37d8f5c273b29d.pnj" alt="Snack" className={styles.recipe_image}/>
				</div>
				<h3 className={styles.recipe_text}>Chocolate Cake</h3>
			</div>
			<button>
				See More
			</button>
		</div>
	);
};

export default RecipeCard;
