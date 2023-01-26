import React, { useEffect, useState } from "react";
import axios from "axios";

import AdBanner from "./AdBanner";
import RecipeCard from "../RecipeCardComponents/RecipeCard";
import SearchBar from "../SearchComponents/SearchBar";

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([]);

	const getRecipes = () => {
		axios.get("https://recipes.devmountain.com/recipes").then((res) => {
			setRecipes(res.data);
			console.log(res.data);
		});
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<div>
			<AdBanner />
			<SearchBar recipes={recipes}/>
			<RecipeCard />
		</div>
	);
};

export default HomeScreen;
