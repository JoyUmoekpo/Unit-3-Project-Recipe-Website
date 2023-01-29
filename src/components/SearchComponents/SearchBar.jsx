import React, { useState } from "react";
import RecipeCard from "../RecipeCardComponents/RecipeCard";
import { BiSearch } from "react-icons/bi";

import styles from "./SearchBar.module.css";

const SearchBar = ({ recipes }) => {
	const [search, setSearch] = useState("");

	const recipeDisplay = recipes
		.filter((recipe, index) => {
			let title = recipe.recipe_name.toLowerCase();
			let searchParams = search.toLowerCase();
			return title.includes(searchParams);
		})
		.map((recipe, index) => {
			return <RecipeCard recipe={recipe} />;
		});

	return (
		<div>
			<div className={styles.search}>
				<BiSearch className={styles.search_icon} size="2em" color="#DA7635"/>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search for a Recipe"
					className={styles.search_bar}
				/>
			</div>
			<div className={styles.recipes_container}>
        {recipeDisplay}
      </div>
		</div>
	);
};

export default SearchBar;
